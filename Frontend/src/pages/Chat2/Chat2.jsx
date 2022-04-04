
import Topbar from "../../component/Topbar.js";
import Conversation from "../../component/conversation/Conversation";
import Message from "../../component/message/Message";
import ChatOnline from "../../component/chatOnline/ChatOnline";
import React,{ useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";
import style from "./Chat.module.css";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    if (arrivalMessage && currentChat && currentChat.members.includes(arrivalMessage.sender)) {
      messages.push(arrivalMessage);
      setMessages(messages);
    }
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/conversations/" + user._id);
        console.log(res);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/messages/" + currentChat._id);
        // console.log(res.data);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("http://localhost:5000/messages", message);
      // console.log(res.data);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   scrollRef.current.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  return (
    <>
      <Topbar />
      <div className={style.messenger}>
        <div className={style.chatMenu}>
          <div className={style.chatMenuWrapper}>
            <input placeholder="Search for friends" className={style.chatMenuInput} />
            {conversations.map((c) => (
              <div key={conversations._id} onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className={style.chatBox}>
          <div className={style.chatBoxWrapper}>
            {currentChat ? (
              <>
                <div className={style.chatBoxTop}>
                  {messages.map((m) => (
                    <div key={messages._id}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className={style.chatBoxBottom}>
                  <textarea
                    className={style.chatMessageInput}
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className={style.chatSubmitButton} onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className={style.noConversationText}>
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className={style.chatOnline}>
          <div className="chatOnlineWrapper">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>
    </>
  );
}
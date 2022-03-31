
import { MoreVert } from "@material-ui/icons";
import React,{ useContext, useEffect, useState } from "react";
import axios from "axios";
import style from "./post.module.css";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {like} from "../../like.png";
import {heart} from "../../heart.png";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:5000/user/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("http://localhost:5000/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className={style.post}>
      <div className={style.postWrapper}>
        <div className={style.postTop}>
          <div className={style.postTopLeft}>
            <Link to={`/profile/${user.username}`}>
              <img
                className={style.postProfileImg}
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className={style.postUsername}>{user.username}</span>
            <span className={style.postDate}>{format(post.createdAt)}</span>
          </div>
          <div className={style.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={style.postCenter}>
          <span className={style.postText}>{post.desc}</span>
          <img className={style.postImg} src={PF + post.img} alt="" />
        </div>
        <div className={style.postBottom}>
          <div className={style.postBottomLeft}>
            <img
              className={style.likeIcon}
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className={style.postLikeCounter}>{like} people like it</span>
          </div>
          <div className={style.postBottomRight}>
            <span className={style.postCommentText}>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
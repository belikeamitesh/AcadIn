import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Comments({comments}) {
  console.log(typeof(comments));
  console.log(comments);
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {
      comments.map((comment, idx) => 
        <>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            style={{fontWeight:'700 !important'}}
            primary={comment.username}
        
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {comment.comment}
                </Typography>
              </React.Fragment>
            }
          />
          
        </ListItem>
        {
          // idx < comments.size() && <Divider variant="inset" component="li" />
        }
        </>
      )
    }
    
      {/* <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
           style={{fontWeight:'700 !important'}}
          primary="username"
       
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                this is a comment
              </Typography>
            </React.Fragment>
          }
        />
        
      </ListItem> */}
    </List>
  )
}

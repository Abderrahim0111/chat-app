import { IconButton } from "@mui/material";
import React from "react";
import Delete from "@mui/icons-material/Delete";
import SendIcon from '@mui/icons-material/Send';
import MessageSelf from "./messageSelf";
import MessageOthers from "./messageOthers";

const ChatArea = () => {
  return (
    <div className="chatArea">
      <div className="header">
        <div className="personInfo">
            <p className="cn-icon">o</p>
            <div>
              <p className="cn-name">omar</p>
              <p className="timeStamp">today</p>
            </div>
        </div>
        <IconButton>
            <Delete/>
        </IconButton>
      </div>
      <div className="msgsContainer">
        <MessageSelf />
        <MessageOthers />
      </div>
      <div className="inptArea">
      <input type="text" name="" id="" placeholder="Type a message" />
        <IconButton>
            <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;

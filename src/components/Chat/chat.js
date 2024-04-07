import React, { useState } from "react";
import styles from "./chat.module.css";
import Avatar from "@mui/material/Avatar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";

function Chat({ chat, sendMessage }) {
  const [input, setInput] = useState("");

  const send_message = (e) => {
    e.preventDefault();
    sendMessage(input, chat.id);
    setInput("");
  };

  return (
    <div className={styles.chat}>
      <div className={styles.chat__header}>
        <Avatar
          src={`https://ui-avatars.com/api/?name=${chat.name}&background=random`}
        ></Avatar>
        <div className={styles.chat__headerInfo}>
          <h3>{chat.name}</h3>
          <p>Last seen at 12:34AM</p>
        </div>
        <div className={styles.chat__headerRight}>
          <IconButton>
            <SearchOutlinedIcon></SearchOutlinedIcon>
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon></AttachFileOutlinedIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <div className={styles.chat__body}>
        {chat.messages?.map((message) => (
          <p
            className={`${styles.chat__message} ${
              message.isSent && styles.chat__receiver
            }`}
            key={message.id}
          >
            {!message.isSent && (
              <span className={styles.chat__name}>{chat.name}</span>
            )}
            {message.text}
            <span className={styles.chat__timestamp}>{message.time}</span>
          </p>
        ))}
      </div>

      <div className={styles.chat__footer}>
        <InsertEmoticonIcon></InsertEmoticonIcon>
        <form action="">
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={send_message}>
            send
          </button>
        </form>
        <MicIcon></MicIcon>
      </div>
    </div>
  );
}

export default Chat;
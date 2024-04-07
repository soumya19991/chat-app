import React from "react";
import { Avatar } from "@mui/material";
import styles from "./SidebarChat.module.css";

const SidebarChat = ({ name, avatar, lastMessage, chat, setChat }) => {
  const addNewRoom = () => {
    const roomName = prompt("Enter room name");

    if (roomName) {
      // do some stuff
    }
  };

  //  : (
  //   <div onClick={() => addNewRoom()} className={styles.sidebarChat}>
  //     <h2>Add new Chat</h2>
  //   </div>
  // );
  return (
    <div className={styles.sidebarChat} onClick={() => setChat(chat)}>
      <Avatar
        src={`https://ui-avatars.com/api/?name=${name}&background=random`}
      ></Avatar>
      <div className={styles.sidebarChat__info}>
        <h2>{name}</h2>
        <div>
          {" "}
          {lastMessage ? lastMessage.text : ""}{" "}
          {/* <span className={styles.chat__timestamp}>11:30</span> */}
        </div>
      </div>
    </div>
  );
};

export default SidebarChat;
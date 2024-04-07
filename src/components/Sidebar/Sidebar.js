import React, { useState, useEffect } from "react";
import DonutLargeSharpIcon from "@mui/icons-material/DonutLargeSharp";
import ChatBubbleSharpIcon from "@mui/icons-material/ChatBubbleSharp";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar, IconButton } from "@mui/material";
import { Contacts, SidebarChat } from "./../../components";
import styles from "./Sidebar.module.css";
import AddIcon from "@mui/icons-material/Add";
import contacts_data from "../../DB/contacts";

function Sidebar({ contacts, chats, setChat, addContactToChat, setcontacts }) {
  // const [chats, setchats] = useState([]);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 300);
  };

  const handleInput = (e) => {
    if (e.target.value) {
      const newcontacts = contacts.filter((contact) => {
        return contact.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setcontacts(newcontacts);
    } else {
      setcontacts(contacts_data);
    }
  };

  useEffect(() => {
    // setchats(chats);
    setTimeout(() => {
      setcontacts(contacts);
      console.log(contacts);
    }, 0);
  }, []);
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <Avatar></Avatar>
        <div className={styles.sidebar__header_right}>
          <IconButton>
            <DonutLargeSharpIcon></DonutLargeSharpIcon>
          </IconButton>
          <IconButton>
            <ChatBubbleSharpIcon></ChatBubbleSharpIcon>
          </IconButton>
          <IconButton>
            <MoreVertSharpIcon></MoreVertSharpIcon>
          </IconButton>

          {/* <SettingsSharpIcon></SettingsSharpIcon> */}
        </div>
      </div>
      <div className={styles.sidebar__search}>
        <div className={styles.sidebar__searchContainer}>
          <IconButton>
            <SearchOutlinedIcon></SearchOutlinedIcon>
          </IconButton>
          <input
            type="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onInput={(e) => {
              handleInput(e);
            }}
            placeholder="Search for contacts"
          />
          {isFocused && (
            <Contacts contacts={contacts} addContactToChat={addContactToChat} />
          )}
          {/* Show contacts on clik of button */}
        </div>
        <AddIcon className={styles.sidebar__add}></AddIcon>
      </div>
      <div className={styles.sidebar_chats}>
        {/* <SidebarChat addNewChat={true} /> */}
        {chats?.map((chat) => (
          <SidebarChat
            key={chat.id}
            name={chat.name}
            avatar={chat.avatar}
            chat={chat}
            lastMessage={chat.messages[chat.messages.length - 1]}
            setChat={setChat}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
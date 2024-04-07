import "./App.css";
import { Sidebar, Chat } from "./components";
import { Router, Route, Routes } from "react-router-dom";
import chats from "./DB/chats";
import contacts from "./DB/contacts";
import { useState, useEffect } from "react";

function App() {
  const [chats_state, setchats] = useState([]);
  const [contacts_state, setcontacts] = useState([]);
  const [current_chat, setcurrent_chat] = useState({});

  const sendMessage = (message, chatId) => {
    const newChat = chats_state.map((chat) => {
      if (chat.id === chatId) {
        const newChat = {
          ...chat,
          messages: [
            ...chat.messages,
            {
              id: Math.floor(Math.random() * 100000),
              isSent: true,
              text: message,
              time: getTime(),
            },
          ],
        };
        setcurrent_chat(newChat);
        return newChat;
      } else {
        return chat;
      }
    });
    setchats(newChat);
  };

  function getTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function addContactToChat(contact) {
    const newChat = {
      id: Math.floor(Math.random() * 5000),
      name: contact.name,
      avatar: "https://i.pravatar.cc/100",
      messages: [],
    };
    console.log("called", newChat);
    if (!chats_state.find((chat) => chat.name === newChat.name)) {
      setchats([newChat, ...chats_state]);
      setcurrent_chat(newChat);
    } else {
      console.log(chats_state, newChat.name);
      setcurrent_chat(chats_state.find((chat) => chat.name === newChat.name));
    }
    // setchats([newChat, ...chats_state]);
  }

  useEffect(() => {
    setTimeout(() => {
      setchats(chats);
      setcontacts(contacts);
      setcurrent_chat(chats[0]);
    }, 300);
  }, []);
  return (
    <div className="app">
      {/* Sidebar */}
      {/* chatbody */}
      <div className="app__body">
        <Sidebar
          contacts={contacts_state}
          chats={chats_state}
          setChat={setcurrent_chat}
          addContactToChat={addContactToChat}
          setcontacts={setcontacts}
        ></Sidebar>
        <Chat chat={current_chat} sendMessage={sendMessage}></Chat>
      </div>
    </div>
  );
}

export default App;
import React from "react";
import { useEffect, useState } from "react";
import styles from "./Contacts.module.css";
import { Avatar } from "@mui/material";

const Contacts = ({ contacts, addContactToChat }) => {
  return (
    <div className={styles.contacts__body}>
      <ul>
        {contacts.map((contact) => {
          return (
            <li
              key={contact.id}
              onClick={() => {
                addContactToChat(contact);
                console.log(contact);
              }}
            >
              <Avatar
                src={`https://ui-avatars.com/api/?name=${contact.name}&background=random`}
              ></Avatar>
              <span>{contact.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;
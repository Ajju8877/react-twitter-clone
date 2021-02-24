import React from "react";
import "./Chat.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Avatar } from "@material-ui/core";

fetch("https://api.first.org/data/v1/news")
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));

export default function Chat() {
  return (
    <div className="chat">
      <div className="chat_body">
        <Avatar />
        <p>
          All chats are here in the ChatBox.All chats are here in the
          ChatBox.All chats are here in the ChatBox.All chats are here in the
          ChatBox.All chats are here in the ChatBox{" "}
        </p>
      </div>

      <div className="close_button">
        <HighlightOffIcon />
      </div>
    </div>
  );
}

import React from "react";
import Sidebar from "./Sidebar.js";
import Chat from "./Chat.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="main_sidebar">
        <Sidebar />
      </div>

      <div className="main_chat">
        <Chat />
        <Chat />
      </div>
    </div>
  );
}

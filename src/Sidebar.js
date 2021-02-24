import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import LineWeightIcon from "@material-ui/icons/LineWeight";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_content">
        <div className="sidebar_details">
          <Avatar />
          <div className="sidebar_chat">
            <p>
              <b> Hi reader, </b>
              Here's your News
            </p>
          </div>
        </div>

        <div className="toggle">
          <h3> View Toggle </h3>
          <div className="toggle_switch">
            <li className="toggle1">
              {" "}
              <LineWeightIcon />{" "}
            </li>
            <li className="toggle2">
              {" "}
              <FormatListBulletedIcon />{" "}
            </li>
          </div>
        </div>

        <div className="feedback">
          <h3> Have A Feedback ? </h3>
          <h4> We're Listning </h4>
        </div>
      </div>
    </div>
  );
}

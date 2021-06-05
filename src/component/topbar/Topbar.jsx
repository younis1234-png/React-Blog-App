import React from "react";
import "./Topbar.scss";
import { Facebook, Instagram, Search, Twitter } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__topLeft">
        <Facebook />
        <Twitter />
        <Instagram />
      </div>
      <div className="topbar__topCenter">
        <ul classNametopbar__topList>
          <li className="topbar__Item">HOME</li>
          <li className="topbar__Item">ABOUT</li>
          <li className="topbar__Item">CONTACT</li>
          <li className="topbar__Item">WRITE</li>
          <li className="topbar__Item">LOGOUT</li>
        </ul>
      </div>
      <div className="topbar__topRight">
        <img
          className="topbar__img"
          src="https://images.unsplash.com/photo-1540671221389-aa5fe5f52417?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1830&q=80"
          alt="User"
        />
        <Search className="topbar__searchIcon" />
      </div>
    </div>
  );
}

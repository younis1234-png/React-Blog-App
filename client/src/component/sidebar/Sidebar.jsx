import React from "react";
import "./Sidebar.scss";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__sidebarItem">
        <span className="sidebar__sidebarTitle">ABOUT ME</span>
        <img
          className="sidebar__img"
          src="https://images.unsplash.com/photo-1526493699191-53c58c5b8a0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1568&q=80"
          alt="about me"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          rerum.
        </p>
      </div>
      <div className="sidebar__sidebarItem">
        <span className="sidebar__sidebarTitle mg">CATEGORIES</span>
        <ul className="sidebar__sidebarList">
          <li className="sidebar__sidebarListItem">Life</li>
          <li className="sidebar__sidebarListItem">Books</li>
          <li className="sidebar__sidebarListItem">Music</li>
          <li className="sidebar__sidebarListItem">Tech</li>
          <li className="sidebar__sidebarListItem">Sport</li>
          <li className="sidebar__sidebarListItem">Health</li>
        </ul>
      </div>
      <div className="sidebar__sidebarItem">
        <span className="sidebar__sidebarTitle">FOLLOW ME</span>
        <div className="sidebar__socialIcons">
          <Facebook className="sidebar__social" />
          <Twitter className="sidebar__social" />
          <Instagram className="sidebar__social" />
        </div>
      </div>
    </div>
  );
}

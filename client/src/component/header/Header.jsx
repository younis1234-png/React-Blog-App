import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header__headerTitles">
        <span className="header__headerTitleSm">
          React & <span className="header__headerTitleIt">Node</span>
        </span>
        <span className="header__headerTitleLg">Blog</span>
      </div>
      <img
        className="header__img"
        src="https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
        alt="blog"
      />
    </div>
  );
}

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
        src="https://images.unsplash.com/photo-1622863891295-dc4bbf8a5d30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        alt="blog"
      />
    </div>
  );
}

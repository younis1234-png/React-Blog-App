import React from "react";
import "./Topbar.scss";
import { Facebook, Instagram, Search, Twitter } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = true;
  return (
    <div className="topbar">
      <div className="topbar__topLeft">
        <Facebook className="topbar__social" />
        <Twitter className="topbar__social" />
        <Instagram className="topbar__social" />
      </div>
      <div className="topbar__topCenter">
        <ul className="topbar__topList">
          <li className="topbar__Item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topbar__Item">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topbar__Item">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topbar__Item">
            {user && (
              <Link className="link" to="/WRITE">
                WRITE
              </Link>
            )}
          </li>
          <li className="topbar__Item">
            {user && (
              <Link className="link" to="/login">
                LOGOUT
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="topbar__topRight">
        {user ? (
          <img
            className="topbar__img"
            src="https://images.unsplash.com/photo-1571442463800-1337d7af9d2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
            alt="User"
          />
        ) : (
          <ul className="topbar__topList">
            <li className="topbar__Item">
              <Link className="link" to="/login">
                LOGING
              </Link>
            </li>
            <li className="topbar__Item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <Search className="topbar__searchIcon" />
      </div>
    </div>
  );
}

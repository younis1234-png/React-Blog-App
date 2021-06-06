import React from "react";
import "./Settings.scss";
import Sidebare from "../../component/sidebar/Sidebar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="settings__title">
          <span className="settings__titleUpdate">Update Your Account</span>
          <span className="settings__titleDelete">Delete Account</span>
        </div>
        <form className="settings__form">
          <label htmlFor="profileImg">Profile Picteur</label>
          <div className="settings__porfileImg">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <AccountCircleIcon className="settings__icon" />
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="setting__input"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Younis" />
          <label>Email</label>
          <input type="email" placeholder="younis@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="*************" />
          <button className="settings__btn">Update</button>
        </form>
      </div>
      <Sidebare />
    </div>
  );
}

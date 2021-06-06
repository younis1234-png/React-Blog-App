import React from "react";
import "./Writ.scss";
import AddIcon from "@material-ui/icons/Add";

export default function Write() {

  return (
    <div className="write">
      <img
        src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        alt="Write input img"
        className="write__img"
      />
      <form className="write__form">
        <div className="write__group">
          <label htmlFor="fileInput">
            <AddIcon className="write__icon" />
          </label>
          <input
            className="write__input write__inputFile"
            type="file"
            id="fileInput"
          />
          <input
            className="write__input write__inputText"
            type="text"
            placeholder="Title"
            id="fileInput"
            autoFocus={true}
          />
        </div>
        <div className="write__group">
          <textarea
            className=" write__input write__textarea"
            placeholder="Tell your story..."
            type="text"
          ></textarea>
        </div>
        <button className="write__btn">Publish</button>
      </form>
    </div>
  );
}

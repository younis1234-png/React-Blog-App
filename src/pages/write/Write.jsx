import React from "react";
import "./Writ.scss";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";

export default function Write() {
  return (
    <div className="write">
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

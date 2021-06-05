import React from "react";
import "./Post.scss";

export default function Post() {
  return (
    <div className="post">
      <img
        className="post__img"
        src="https://images.unsplash.com/photo-1457264635001-828d0cbd483e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1649&q=80"
        alt=""
      />
      <div className="post__info">
        <div className="post__cats">
          <span className="post__cat">Music</span>
          <span className="post__cat">Life</span>
        </div>
        <span className="post__title">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="post__date">1 hour ago</span>
      </div>
      <p className="post__desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}

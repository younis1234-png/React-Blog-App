import React from "react";
import "./SinglePost.scss";
import { Delete, Edit } from "@material-ui/icons";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePost__wrapper">
        <img
          src="https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
          alt="single post"
          className="singlePost__img"
        />
        <h1 className="singlePost__title">
          Lorem ipsum dolor sit amet consectetur adipisicing.
          <div className="singlePost__edit">
            <Edit className="singlePost__icon" />
            <Delete className="singlePost__icon" />
          </div>
        </h1>
        <div className="singlePost__info">
          <span className="singlePost__autor">
            Autor: <b>Younis</b>
          </span>
          <span className="singlePost__date"> 1 hour ago</span>
        </div>
        <p className="singlePost__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id numquam
          voluptate voluptates debitis accusantium aliquid quas eum excepturi
          voluptas ut accusamus sint quisquam totam doloribus vel obcaecati,
          corporis minima veritatis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Id numquam voluptate voluptates debitis accusantium
          aliquid quas eum excepturi voluptas ut accusamus sint quisquam totam
          doloribus vel obcaecati, corporis minima veritatis?
        </p>
      </div>
    </div>
  );
}

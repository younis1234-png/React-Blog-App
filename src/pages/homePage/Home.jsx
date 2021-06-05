import React from "react";
import Header from "../../component/header/Header";
import Post from "../../component/post/Post";
import Sidebar from "../../component/sidebar/Sidebar";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <Sidebar />
      </div>
    </>
  );
}

import React from "react";
import Topbar from "./component/topbar/Topbar";
import "./app.scss";
import Home from "./pages/homePage/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

const App = () => {
  return (
    <div>
      <Topbar />
      <Write />
    </div>
  );
};

export default App;

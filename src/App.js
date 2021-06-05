import React from "react";
import Topbar from "./component/topbar/Topbar";
import "./app.scss";
import Home from "./pages/homePage/Home";

const App = () => {
  return (
    <div>
      <Topbar />
      <Home />
    </div>
  );
};

export default App;

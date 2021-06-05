import React from "react";
import Topbar from "./component/topbar/Topbar";
import "./app.scss";
import Home from "./pages/homePage/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Logind";

const App = () => {
  return (
    <div>
      <Topbar />
      <Login />
    </div>
  );
};

export default App;

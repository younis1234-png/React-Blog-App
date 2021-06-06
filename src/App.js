import React from "react";
import Topbar from "./component/topbar/Topbar";
import "./app.scss";
import Home from "./pages/homePage/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Logind";
import Register from "./pages/register/Register.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const user = true;

  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">{user ? <Single /> : <Register />}</Route>
      </Switch>
    </Router>
  );
};

export default App;

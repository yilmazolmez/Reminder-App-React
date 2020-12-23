import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reminders from "./components/Reminders";
import Main from "./components/Main";
import Profile from "./components/Profile";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/reminderCategory/:reminderCategoryId">
                  <Reminders />
                </Route>
                <Route exact path="/Home">
                  <Main />
                </Route>
                <Route exact path="/">
                  <Main />
                </Route>
                <Route exact path="/Profile">
                  <Profile />
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

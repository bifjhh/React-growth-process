import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import router from "./router/index";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ul>
            {router.map(({ path, name }, index) => {
              return (
                <li key={name + path}>
                  <Link to={path}>{name} </Link>
                </li>
              );
            })}
          </ul>
          {router.map(({ path, name, ComponentName }, index) => {
            return (
              <Route path={path} component={ComponentName}  key={path + name}/>
            );
          })}
        </header>
      </div>
    </Router>
  );
}

export default App;

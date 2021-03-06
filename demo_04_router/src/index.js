import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import router from "./router/index";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ul>
        {router.map(({ path, name }, index) => {
          return (
            <li key={name + path}>
              <Link to={path}>{name} </Link>
            </li>
          );
        })}
      </ul>
      {router.map(({ path, name, exact = true, ComponentName }, index) => {
        return (
          <Route
            path={path}
            exact={exact}
            component={ComponentName}
            key={path + name}
          />
        );
      })}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

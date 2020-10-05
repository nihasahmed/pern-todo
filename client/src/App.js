import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

//components
import ProtectedRoute from "./components/protectedroute";
import Todo from "./components/todo";
import LoginComp from "./components/logincomp";
import RegisterComp from "./components/register";

function App() {
  return (
    <Router>
      <Switch>
        {/* <ProtectedRoute exact path="/test" component={Todo} /> */}
        <ProtectedRoute path="/test" component={Todo} exact={true} />
        <Route path="/login">
          <LoginComp />
        </Route>
        <Route exact path="/register" component={RegisterComp} />
        <Route path="*" component={() => "404 Page not found"} />
      </Switch>
    </Router>
  );
}

export default App;

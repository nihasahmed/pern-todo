import React, { Fragment } from "react";
import InputComp from "./inputcomp";
import ListComp from "./listcomp";
// import axios from "axios";
import { useHistory } from "react-router";
import auth from "./auth";

const Todo = () => {
  const history = useHistory();
  const logout = async (e) => {
    e.preventDefault();
    auth.logout().then((returnValue) => {
      if (returnValue) {
        history.push({
          pathname: "/login",
        });
      }
    });
  };

  return (
    <Fragment>
      <nav className="navbar navbar-inverse  navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/test">
              Home
            </a>
          </div>

          <ul className="nav navbar-nav navbar-right">
            <li>
              <button
                type="button"
                className="btn btn-success"
                onClick={(e) => logout(e)}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <InputComp />
        <ListComp />
      </div>
    </Fragment>
  );
};

export default Todo;

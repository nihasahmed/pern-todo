import React, { Fragment, useState } from "react";
import "./logincomp.css";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const LoginComp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error_msg, seterror_msg] = useState("");
  const history = useHistory();
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      axios({
        method: "post",
        url: "http://localhost:5000/login",
        data: { email, password },
        withCredentials: true,
      }).then((response) => {
        if (response.data.status === 200) {
          history.push({
            pathname: "/test",
            state: {
              response: response.data.message,
            },
          });
        } else {
          seterror_msg(response.data.message);
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Fragment>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h5 className="text-danger">{error_msg}</h5>
          <form onSubmit={onSubmitForm}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
          <div className="text-center ">
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginComp;

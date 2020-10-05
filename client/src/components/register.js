import React, { Fragment, useState } from "react";
import "./logincomp.css";
import axios from "axios";
import { useHistory } from "react-router";

const RegisterComp = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error_msg, seterror_msg] = useState("");
  const history = useHistory();
  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (name === "") {
      seterror_msg("Name field is empty");
      return;
    }
    if (email === "") {
      seterror_msg("Email field is empty");
      return;
    }
    if (password === "") {
      seterror_msg("Password field is empty");
      return;
    }
    if (password.length < 6) {
      seterror_msg("Password must have more than 6 characters");
      return;
    }
    try {
      axios({
        method: "post",
        url: "http://localhost:5000/register",
        data: { name, email, password },
        withCredentials: true,
      }).then((response) => {
        if (response.data.status === 200) {
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
        } else if (response.data.status === 400) {
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
          <h2 className="text-center">Registration</h2>
          <h5 className="text-danger">{error_msg}</h5>
          <form onSubmit={onSubmitForm}>
            <input
              type="text"
              id="name"
              className="fadeIn second"
              name="name"
              placeholder="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
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
            <input type="submit" className="fadeIn fourth" value="Register" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterComp;

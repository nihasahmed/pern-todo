import React, { Fragment, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const InputComp = () => {
  const [desc, setdesc] = useState("");
  const history = useHistory();

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      axios({
        method: "post",
        url: "http://localhost:5000/todo",
        data: { desc },
        withCredentials: true,
      }).then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          console.log(response.data.message);
          history.push({ pathname: "/empty" });
          history.replace({
            pathname: "/test",
            state: {
              response: response.data.message,
            },
          });
        } else {
          alert(response.data.message);
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-4"> To DO List</h1>
      <form className="d-flex mt-4" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <button className="btn btn-success ml-2">Add</button>
      </form>
    </Fragment>
  );
};

export default InputComp;

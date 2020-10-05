import React, { Fragment, useEffect, useState } from "react";
import EditComp from "./editcomp";
import axios from "axios";

const ListComp = () => {
  const [toDos, setToDos] = useState([]);

  const getToDos = async () => {
    try {
      axios({
        method: "get",
        url: "http://localhost:5000/todo",
        withCredentials: true,
      }).then((response) => {
        if (response.data.status === 200) {
          setToDos(response.data.data);
        } else {
          alert(response.data.message);
        }
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteToDo = async (id) => {
    try {
      axios({
        method: "delete",
        url: `http://localhost:5000/todo/${id}`,
        withCredentials: true,
      }).then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          setToDos(toDos.filter((toDo) => toDo.id !== id));
        } else {
          alert(response.data.message);
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getToDos();
  }, []);
  return (
    <Fragment>
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {toDos.map((toDo) => (
            <tr key={toDo.id}>
              <td>{toDo.desc}</td>
              <td>
                <EditComp toDo={toDo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteToDo(toDo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListComp;

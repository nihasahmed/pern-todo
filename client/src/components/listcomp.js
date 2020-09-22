import React, { Fragment, useEffect, useState } from "react";
import EditComp from "./editcomp";

const ListComp = () => {
  const [toDos, setToDos] = useState([]);

  const getToDos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todo");
      const jsonData = await response.json();
      setToDos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteToDo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/todo/${id}`, {
        method: "DELETE",
      });

      setToDos(toDos.filter((toDo) => toDo.id !== id));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getToDos();
  }, []);
  console.log(toDos);
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

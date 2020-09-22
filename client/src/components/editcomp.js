import React, { Fragment, useState } from "react";

const EditComp = ({ toDo }) => {
  const [desc, setdesc] = useState(toDo.desc);
  const updateToDo = async (e) => {
    e.preventDefault();
    try {
      const body = { desc };
      const response = await fetch(`http://localhost:5000/todo/${toDo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${toDo.id}`}
      >
        Edit
      </button>

      <div
        className="modal fade"
        id={`id${toDo.id}`}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onClick={(e) => setdesc(toDo.desc)}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Editi ToDo description
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={(e) => setdesc(toDo.desc)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={(e) => updateToDo(e)}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={(e) => setdesc(toDo.desc)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditComp;

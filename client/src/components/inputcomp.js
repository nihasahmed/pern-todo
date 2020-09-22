import React, {Fragment, useState} from 'react'

const InputComp = () => {
    const [desc, setdesc] = useState("");
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {desc};
            const response = await fetch('http://localhost:5000/todo', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })
            window.location = "/";
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <Fragment>
            <h1 className="text-center mt-4"> To DO List</h1>
            <form className="d-flex mt-4" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={desc} onChange={ e => setdesc(e.target.value)}/>
                <button className="btn btn-success ml-2">Add</button>
            </form>
        </Fragment>
    )
}

export default InputComp;
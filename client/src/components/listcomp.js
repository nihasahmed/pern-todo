import React, {
    Fragment,
    useEffect,
    useState
} from 'react'

const ListComp = () => {

    const getToDos = async() => {
        try {
            const response = await fetch('http://localhost:5000/todo');
            const jsonData = await response.json();
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getToDos();
    })

    return <h1 > LIST of todos </h1>;
}

export default ListComp;
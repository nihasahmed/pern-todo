import React, { Fragment } from "react";
import "./App.css";

//components
import InputComp from "./components/inputcomp";
import ListComp from "./components/listcomp";


function App() {
  return (
    <Fragment>
      <div className="container">
        <InputComp />
        <ListComp/>
      </div>
    </Fragment>
  );
}

export default App;

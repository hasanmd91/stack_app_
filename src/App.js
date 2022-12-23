import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState("");
  const [reversed, setReversed] = useState("");

  const changeHandeler = (e) => {
    setData(e.target.value);
  };

  const submitHandeler = (e) => {
    e.preventDefault();
    const array = data.split("");
    let newdata = "";
    for (let i = array.length; i > 0; i--) {
      newdata += array.pop();
    }
    setReversed(newdata);
  };
  return (
    <div className="container">
      <h1> Reverse any string using stack data structure </h1>
      <form
        className="mb-3"
        onChange={changeHandeler}
        onSubmit={submitHandeler}
      >
        <div>
          <label htmlFor="formGroupExampleInput" className="form-label">
            Input:
          </label>
          <input
            type="text"
            id="formGroupExampleInput"
            placeholder=" write your word "
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <h2>Reversed string : {reversed}</h2>
    </div>
  );
};

export default App;

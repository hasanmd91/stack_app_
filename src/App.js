import { render } from "@testing-library/react";
import React, { useState } from "react";
import Card from "./components/Card";

let number = [[1, 2, 3, 4, 5, 6, 7]
let numberTopush = 1;

const App = () => {
  const [array, setArray] = useState([]);

  const pushHandeler = () => {
    number.push(numberTopush);
    numberTopush++;
    setArray(number);
    console.log(array);
  };
  const popHandeler = () => {
    if (number.length === 0) {
      return;
    } else {
      number.pop();
    }
    setArray(number);
    console.log(array);
  };

  return (
    <div>
    {array.map((ele) => (
      <Card element={ele} key={ele} />
    ))}
    <button type="submit" onClick={pushHandeler}>
      Push
    </button>
    <button type="submit" onClick={popHandeler}>
      Pop
    </button>
  </div>
   
  );
};

export default App;

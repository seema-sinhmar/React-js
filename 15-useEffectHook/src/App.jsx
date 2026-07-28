import React, { useEffect, useState } from "react";

const App = () => {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);

  const incNum = () => {
    console.log("number bdh rha h");
  };
  const decNum = () => {
    console.log("number ght rha h");
  };

  useEffect(
    function () {
      incNum();
    },
    [num1],
  );

  useEffect(
    function () {
      decNum();
    },
    [num2],
  );

  return (
    <div className="counter">
      <h1>
        {num1}, {num2}
      </h1>
      <button
        onClick={function () {
          setnum1(num1 + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={function () {
          setnum2(num2-1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default App;

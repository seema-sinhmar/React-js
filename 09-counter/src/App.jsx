import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);

  const incNum = () => {
    console.log(num);
    setnum(num + 1);
  };
  const decNum = () => {
    setnum(num - 1);
  };

  return (
    <div className="counter">
      <h1>{num}</h1>
      <button onClick={incNum}>Increase</button>
      <button onClick={decNum}>Decrease</button>
    </div>
  );
};

export default App;

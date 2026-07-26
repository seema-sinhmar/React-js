import React from "react";

const App = () => {
  let btnClick = (user) => {
    document.write(`My name is ${user}`);
  };

  let divEvent = () => {
    console.log("I am in a div");
  };
  return (
    <div>
      <button
        onClick={(elem) => {
          btnClick("Neha");
        }}
      >
        click here
      </button>
      <input
        type="text"
        onChange={(elem) => {
          console.log(elem.target.value);
        }}
      />
      <div
        className="div"
        onMouseOver={(elem) => {
          console.log(elem.type);
          divEvent();
        }}
      >
        div
      </div>
    </div>
  );
};

export default App;

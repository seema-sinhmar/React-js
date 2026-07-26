import React, { useState } from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form is submitted");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" placeholder="enter your name" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;

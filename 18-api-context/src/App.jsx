import React, { useContext, useState } from "react";
import Nav1 from "./components/Nav1";
import Nav2 from "./components/Nav2";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeDataContext } from "./context/ThemeContext";

const App = (props) => {
  const [theme] = useContext(ThemeDataContext)
  return (
    <div>
      <div className={theme}
      >
        <Nav1 />
        <Nav2 />
      </div>

      <ThemeBtn />
    </div>
  );
};

export default App;

import React, { useState } from "react";

const App = () => {
  const [user, setuser] = useState("seema");

  const btnClick = () => {
    setuser("sukh");
  };

  const [userInfo, setuserInfo] = useState({ name: "seema", age: 22 });

  const infoChnge = () => {
    let newInfo = { ...userInfo };
    newInfo.name = "sukh";
    newInfo.age = 23;
    setuserInfo(newInfo);
  };

  const [arr, setarr] = useState([10, 20, 30]);

  const arrChnge = () => {
    let newArr = [...arr];
    newArr.push(50)
    setarr(newArr)
  };

  return (
    <div>
      <div>{arr.map((Element, index) =>{
        return (
          <h3 key={index}>
            {Element}
          </h3>
        )
      })}</div>
      <button onClick={arrChnge}>click me</button>
    </div>
  );
};

export default App;

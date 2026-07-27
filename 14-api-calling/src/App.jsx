import { useState } from "react";
import axios from "axios";

const App = () => {
  // const fetchData = async() => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   // console.log(response.json())
  //   const data = await response.json();
  //   console.log(data);
  // };

  const [data, setData] = useState([]);

  const axiosData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setData(response.data);
  };
  return (
    <div>
      <button onClick={axiosData}>Get Data</button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <div key={idx}>
              <h3>{elem.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`,
    );
    setUserData(response.data);
  };

  let printUserData = <h1 className="loading">Loading.........</h1>;
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="blank">
            <div className="img">
              <img src={elem.download_url} alt="image" />
              <h1>{elem.author}</h1>
            </div>
          </a>
        </div>
      );
    });
  }

  useEffect(function () {
    getData();
  });
  return (
    <div>
      <div className="container">{printUserData}</div>
      <div className="btnCont">
        <button
          onClick={() => {
            if (index > 1) {
              setUserData([]);
              setIndex(index - 1);
            }
          }}
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;

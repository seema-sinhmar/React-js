import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, detail });
    setTask(copyTask);

    setTitle("");
    setDetail("");
  };

  const deleteButton = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="parent">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="enter heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="enter your details here"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      <div className="cardParent">
        {task.map(function (elem, idx) {
          return (
            <div key={idx}>
              <div className="card">
                <h3>{elem.title}</h3>
                <p>{elem.detail}</p>
                <div className="btn">
                  <button
                    onClick={function () {
                      deleteButton(idx);
                    }}
                  ></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

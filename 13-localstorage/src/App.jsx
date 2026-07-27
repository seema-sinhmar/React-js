const App = () => {
  localStorage.setItem("user", "seema");
  const data = localStorage.getItem("user");
  console.log(data);

  localStorage.setItem("age", 18);
  console.log(localStorage.getItem("age"));

  localStorage.removeItem("age");

  const info = {
    name: "seema",
    age: 22,
    study: "msc",
  };
  localStorage.setItem("info", JSON.stringify(info));
  let res = JSON.parse(localStorage.getItem("info"));
  console.log(JSON.parse(localStorage.getItem("info")));

  return <div>app</div>;
};

export default App;

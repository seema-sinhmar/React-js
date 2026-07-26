import React from "react";
import Card from "./components/card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Sukhdeep"
        img="https://images.unsplash.com/photo-1780163930838-1502715c3bc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
      />
      <Card
        user="Seema"
        img="https://images.unsplash.com/photo-1774816064876-10a893fc79e9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Suhani"
        img="https://images.unsplash.com/photo-1784600239757-c0f7c4a9f17c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"
      />
    </div>
  );
};

export default App;

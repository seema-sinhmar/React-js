import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="image" />
      <h1 className="name">{props.user}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        tempora?
      </p>
      <button type="submit">view profile</button>
    </div>
  );
};

export default Card;

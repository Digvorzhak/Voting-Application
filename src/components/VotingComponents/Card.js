import React from "react";

const Card = ({ name, img, votes }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={img}></img>
      <span>Votes: {votes}</span>
      <button>Vote</button>
    </div>
  );
};

export default Card;

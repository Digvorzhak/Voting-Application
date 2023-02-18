import React, { useState } from "react";
import data from "../../data";

const Card = ({ name, img, votes, message }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={img}></img>
      <span>Votes: {votes}</span>
      <span>{message}</span>
      {/* <button onClick={voteFunc}>Vote</button> */}
    </div>
  );
};

export default Card;

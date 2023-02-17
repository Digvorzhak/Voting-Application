import React from "react";
import Card from "../components/VotingComponents/Card";
import "./VotingPage.css";

const Voting = () => {
  const images = require.context("../assets/images", false, /\.(png|jpe?g|svg)$/);
  const parties = [
    {
      name: "Maccabi Tel Aviv",
      img: images("./maccabitlv.png"),
      votes: 0,
    },
    {
      name: "CSKA Moscow",
      img: images("./cskamoscow.png"),
      votes: 0,
    },
    {
      name: "Olympiacos",
      img: images("./olympiacos.png"),
      votes: 0,
    },
    {
      name: "Real Madrid",
      img: images("./realmadrid.png"),
      votes: 0,
    },
  ];

  return (
    <div className="cards-container">
      <Card name={parties[0].name} img={parties[0].img} votes={parties[0].votes}></Card>
      <Card name={parties[1].name} img={parties[1].img} votes={parties[1].votes}></Card>
      <Card name={parties[2].name} img={parties[2].img} votes={parties[2].votes}></Card>
      <Card name={parties[3].name} img={parties[3].img} votes={parties[3].votes}></Card>
    </div>
  );
};

export default Voting;

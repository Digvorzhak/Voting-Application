import React, { useState } from "react";
import Card from "../components/VotingComponents/Card";
import "./VotingPage.css";
import data from "../data";
import { PAGES } from "../constants";

const [login] = PAGES;

const Voting = ({ setPage }) => {
  const loggedUser = JSON.parse(localStorage.getItem("userData"));
  console.log(loggedUser);
  const userData = data.find((person) => person.email === loggedUser.email);
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
  const [user, setUser] = useState(loggedUser);
  const [voteMaccabi, setVoteMaccabi] = useState(parties[0].votes);
  const [voteCSKA, setVoteCSKA] = useState(parties[1].votes);
  const [voteOlympiacos, setVoteOlympiacos] = useState(parties[2].votes);
  const [voteRealMadrid, setVoteRealMadrid] = useState(parties[3].votes);
  let [btnMaccabi, setBtnMaccabi] = useState(false);
  let [btnCSKA, setBtnCSKA] = useState(false);
  let [btnOlympiacos, setBtnOlympiacos] = useState(false);
  let [btnRealMadrid, setBtnRealMadrid] = useState(false);
  let [backBtn, setBackBtn] = useState(false);
  let [doneBtn, setDoneBtn] = useState(false);
  // let maccabi = localStorage.setItem("maccabi Votes", voteMaccabi);
  // let moscow = localStorage.setItem("moscow Votes", voteCSKA);
  // let olympiacos = localStorage.setItem("olympiacos Votes", voteOlympiacos);
  // let realMadrid = localStorage.setItem("realMadrid Votes", voteRealMadrid);

  const handleLogout = () => {
    setUser("");
    localStorage.removeItem("userData");
    setPage(login);
  };

  const voteFuncMaccabi = () => {
    if (userData.vote === undefined) {
      userData.vote = true;
      setVoteMaccabi(voteMaccabi + 1);
      setBtnMaccabi((btnMaccabi = true));
      console.log(loggedUser);
      console.log(userData);
    }
  };
  const voteFuncCSKA = () => {
    if (userData.vote === undefined) {
      userData.vote = true;
      setVoteCSKA(voteCSKA + 1);
      setBtnCSKA((btnCSKA = true));
    }
  };
  const voteFuncOlympiacos = () => {
    if (userData.vote === undefined) {
      userData.vote = true;
      setVoteOlympiacos(voteOlympiacos + 1);
      setBtnOlympiacos((btnOlympiacos = true));
    }
  };
  const voteFuncRealMadrid = () => {
    if (userData.vote === undefined) {
      userData.vote = true;
      setVoteRealMadrid(voteRealMadrid + 1);
      setBtnRealMadrid((btnRealMadrid = true));
    }
  };

  const backBtnFuncMaccabi = () => {
    delete userData.vote;
    setBackBtn((backBtn = false));
    setBtnMaccabi((btnMaccabi = false));
    setVoteMaccabi(voteMaccabi - 1);
  };
  const backBtnFuncCSKA = () => {
    delete userData.vote;
    setBackBtn((backBtn = false));
    setBtnCSKA((btnCSKA = false));
    setVoteCSKA(voteCSKA - 1);
  };
  const backBtnFuncOlympiacos = () => {
    delete userData.vote;
    setBackBtn((backBtn = false));
    setBtnOlympiacos((btnOlympiacos = false));
    setVoteOlympiacos(voteOlympiacos - 1);
  };
  const backBtnFuncRealMadrid = () => {
    delete userData.vote;
    setBackBtn((backBtn = false));
    setBtnRealMadrid((btnRealMadrid = false));
    setVoteRealMadrid(voteRealMadrid - 1);
  };

  const doneBtnFunc = () => {
    userData.vote = true;
    setDoneBtn((doneBtn = true));
    if ((userData.type = "admin")) {
      console.log("admin");
    }
  };

  return (
    <div className="cards-container">
      <div>
        {doneBtn && <span>Thank you!</span>}
        <button onClick={handleLogout}>Log Out</button>
      </div>
      <div>
        <Card name={parties[0].name} img={parties[0].img} votes={voteMaccabi}></Card>
        {!btnMaccabi && !backBtn && <button onClick={voteFuncMaccabi}>Vote</button>}
        {btnMaccabi && !backBtn && !doneBtn && <button onClick={doneBtnFunc}>Done</button>}
        {btnMaccabi && !backBtn && !doneBtn && <button onClick={backBtnFuncMaccabi}>Back</button>}
        <Card name={parties[1].name} img={parties[1].img} votes={voteCSKA}></Card>
        {!btnCSKA && !backBtn && <button onClick={voteFuncCSKA}>Vote</button>}
        {btnCSKA && !backBtn && !doneBtn && <button onClick={doneBtnFunc}>Done</button>}
        {btnCSKA && !backBtn && !doneBtn && <button onClick={backBtnFuncCSKA}>Back</button>}
      </div>
      <div>
        <Card name={parties[2].name} img={parties[2].img} votes={voteOlympiacos}></Card>
        {!btnOlympiacos && !backBtn && <button onClick={voteFuncOlympiacos}>Vote</button>}
        {btnOlympiacos && !backBtn && !doneBtn && <button onClick={doneBtnFunc}>Done</button>}
        {btnOlympiacos && !backBtn && !doneBtn && <button onClick={backBtnFuncOlympiacos}>Back</button>}
        <Card name={parties[3].name} img={parties[3].img} votes={voteRealMadrid}></Card>
        {!btnRealMadrid && !backBtn && <button onClick={voteFuncRealMadrid}>Vote</button>}
        {btnRealMadrid && !backBtn && !doneBtn && <button onClick={doneBtnFunc}>Done</button>}
        {btnRealMadrid && !backBtn && !doneBtn && <button onClick={backBtnFuncRealMadrid}>Back</button>}
      </div>
    </div>
  );
};

export default Voting;

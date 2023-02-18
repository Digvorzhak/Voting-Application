import { useState, useEffect } from "react";
import LoginForm from "./components/LoginComponents/LoginForm";

import { PAGES } from "./constants";

import Login from "./pages/Login.page";
import Voting from "./pages/Voting.page";

// import "./styles/App.css";

const userData = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null;

const App = () => {
  const [page, setPage] = useState("login");

  const [login, voting] = PAGES;

  useEffect(() => {
    if (!userData) {
      setPage(login);
    } else {
      setPage(voting);
    }
  }, [login, voting]);

  switch (page) {
    case login:
      return <Login setPage={setPage} />;
    case voting:
      return <Voting setPage={setPage} />;
    default:
      return <Login setPage={setPage} />;
  }
  // return <Voting></Voting>;
  // return <Login></Login>;
};

export default App;

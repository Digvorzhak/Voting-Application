import { useState } from "react";
import "./LoginPage.css";
import { PAGES } from "../constants";
import data from "../data";
import LoginForm from "../components/LoginComponents/LoginForm";
import Logo from "../components/LoginComponents/Logo";
// import validation from "../validation";

const [, voting] = PAGES;

const Login = ({ setPage }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (e) => {
    setEmailError({
      isError: false,
      message: "",
    });
    setPasswordError({
      isError: false,
      message: "",
    });

    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const { email, password } = values;

    const validation = (email, password) => {
      const checker = data.some((person) => person.email === email && person.password === password);
      console.log(checker);
      return checker;
    };

    if (!email) {
      const message = "Please enter your Email";
      setEmailError({
        isError: true,
        message,
      });
    } else {
      setEmailError({
        isError: false,
        message: "",
      });
    }

    if (!password) {
      const message = "Please enter a password";
      setPasswordError({
        isError: true,
        message,
      });
    } else {
      setPasswordError({
        isError: false,
        message: "",
      });
    }

    if (!email || !validation(email, password) || !password) {
      setIsLoading(false);
      // setIsError(true);
      return;
    }
  };
  const handleLogin = () => {
    localStorage.setItem("userData", JSON.stringify(values));
    setPage(voting);
  };

  return (
    <div className="container">
      {/* <Logo /> */}
      <p>Welcome</p>
      <form className="form" onSubmit={onSubmit}>
        {/* email field */}
        <LoginForm error={emailError} type="email" name="email" value={values.email} handleChange={handleChange} />
        {emailError.isError && <small>{emailError.message}</small>}
        {/* password field */}
        <LoginForm error={passwordError} type="password" name="password" value={values.password} handleChange={handleChange} />
        {passwordError.isError && <small>{passwordError.message}</small>}
        <button onClick={handleLogin} type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "loading..." : "Log In"}
        </button>
      </form>
      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </div>
  );
};

export default Login;

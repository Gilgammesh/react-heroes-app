import React from "react";

const LoginScreen = ({ history }) => {
  const handleClick = (evt) => {
    history.push("/");
  };
  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleClick}>
        Ingresar
      </button>
    </div>
  );
};

export default LoginScreen;

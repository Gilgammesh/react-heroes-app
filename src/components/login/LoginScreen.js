import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";

const LoginScreen = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const [formValues, handleInputChange, resetForm] = useForm({
    username: "",
    password: "",
  });
  const { username, password } = formValues;

  let path = localStorage.getItem("lastPath") || "/";

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: types.login,
      payload: formValues,
    });
    resetForm({
      username: "",
      password: "",
    });
    //history.push("/");
    history.replace(path);
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-md-center">
        <div className="col col-md-4">
          <h1>Login Screen</h1>
          <hr />
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <h4>Iniciar Sesión</h4>
                </div>
                <div className="form-group">
                  <label htmlFor="username">Usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Ingresar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

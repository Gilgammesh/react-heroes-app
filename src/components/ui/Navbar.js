import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

const Navbar = () => {
  const history = useHistory();
  const { user, dispatch } = useContext(AuthContext);
  const { username } = user;

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({
      type: types.logout,
    });
    history.replace("/login");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <h5 className="navbar-item navbar-text mr-3">
            Bienvenido <span className="text-white">{username}</span>
          </h5>
          <button className="btn btn-warning" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const HeroItem = ({ hero }) => {
  return (
    <div className="col mb-4 animate__animated animate__heartBeat">
      <div className="card">
        <img
          src={`./assets/heroes/${hero.id}.jpg`}
          className="card-img-top"
          alt={hero.superhero}
        />
        <div className="card-body">
          <h5 className="card-title">{hero.superhero}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{hero.alter_ego}</h6>
          <Link to={`./hero/${hero.id}`}>Ver Detalle</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;

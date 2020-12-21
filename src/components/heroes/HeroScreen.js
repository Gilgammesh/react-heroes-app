import React, { useMemo } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

const HeroScreen = (/* { match } */) => {
  // const id = match.params.id;
  const { id } = useParams();
  const history = useHistory();

  // const hero = getHeroById(id);
  const hero = useMemo(() => getHeroById(id), [id]);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const returnPage = () => {
    if (history.length <= 3) {
      if (hero.publisher === "DC Comics") {
        history.push("/dc");
      }
      if (hero.publisher === "Marvel Comics") {
        history.push("/marvel");
      }
    } else {
      history.goBack();
    }
  };

  return (
    <div>
      <h1>Hero Screen</h1>
      <hr />
      <button onClick={returnPage} className="btn btn-danger mb-3">
        Regresar
      </button>
      <div className="row">
        <div className="card col-md-6">
          <img
            src={`../assets/heroes/${hero.id}.jpg`}
            className="card-img-top animate__animated animate__fadeInLeft"
            alt={hero.superhero}
          />
          <div className="card-body">
            <h5 className="card-title">{hero.superhero}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{hero.alter_ego}</h6>
            <h6 className="card-subtitle mb-2 text-muted">
              {hero.first_appearance}
            </h6>
            <h6 className="card-text">Caracteres: {hero.characters}</h6>
            <h6 className="card-link">Publisher: {hero.publisher}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;

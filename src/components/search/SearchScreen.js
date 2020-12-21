import React, { useState } from "react";
import HeroItem from "../heroes/HeroItem";
import { useForm } from "../../hooks/useForm";
import { heros } from "../../data/heros";

const SearchScreen = () => {
  const [formValues, handleInputChange, resetForm] = useForm({
    hero: "",
  });
  const { hero } = formValues;
  const [filter, setFilter] = useState(heros);

  const buscarHeroe = (evt) => {
    evt.preventDefault();
    setFilter(
      heros.filter((ele) => {
        return ele.superhero.toLowerCase().includes(hero.toLowerCase());
      })
    );
  };

  const limpiarBusqueda = () => {
    resetForm({ hero: "" });
    setFilter(heros);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <h4>Buscar heroes</h4>
          <form onSubmit={buscarHeroe}>
            <div className="form-group row">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  name="hero"
                  value={hero}
                  autoComplete="off"
                  placeholder="Escriba nombre de heroe"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6">
                <button type="submit" className="btn btn-success">
                  Buscar
                </button>
              </div>
              <div className="col-sm-6">
                <button
                  onClick={limpiarBusqueda}
                  type="button"
                  className="btn btn-secondary"
                >
                  Limpiar
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-8">
          <h4>
            Resultados{" "}
            <span className="badge badge-pill badge-danger ml-2">
              {filter.length}
            </span>
          </h4>
          <div className="row row-cols-1 row-cols-md-3">
            {filter.map((ele) => {
              return <HeroItem key={ele.id} hero={ele} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;

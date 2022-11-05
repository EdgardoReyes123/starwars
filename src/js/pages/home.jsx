import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../component/card.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="personajes">
        <h1 className="titulo">Characters</h1>

        <div className="d-flex flex-row flex-nowrap overflow-auto card">
          {store.people.map((personaje, index) => {
            return (
              <div key={personaje.name}>
                <Card detail={personaje} type="people" id={index + 1} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="planetas">
        <h1 className="titulo">Planets</h1>

        <div className="d-flex flex-row flex-nowrap overflow-auto card">
          {store.planet.map((planeta, index) => {
            return (
              <div key={planeta.name}>
                <Card detail={planeta} type="planets" id={index + 1} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
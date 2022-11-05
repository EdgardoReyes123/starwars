import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Button, Card, Stack } from "react-bootstrap";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const { type, theid } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const getDetails = async () => {
      let response = await fetch(`https://swapi.dev/api/${type}/${theid}/`);
      let data = await response.json();
      setDetails(data);
    };
    getDetails();
  }, []);

  return (
    <>
      <Stack
        direction="horizontal"
        style={{ width: "18rem", marginLeft: "20%" }}
        gap={2}
      >
        <div>
          <Card.Img
            className="imgdetails"
            variant="top"
            src={`https://starwars-visualguide.com/assets/img/${
              type == "people" ? "characters" : type
            }/${theid}.jpg`}
          />
        </div>
        <div>
          <Card.Body className="cardDetail">
            <Card.Title className="carDetail">
              <h1>{details.name}</h1>
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              laudantium nihil eaque molestias, est saepe sit. Architecto, quam
              optio? Quod, aspernatur! Adipisci sit assumenda omnis neque
              voluptatum perferendis autem deserunt.
            </Card.Text>
          </Card.Body>
        </div>
      </Stack>
      <Stack
        direction="horizontal"
        gap={5}
        style={{
          width: "1000px",
          borderTop: "5px solid brown",
          marginLeft: "13%",
          color: "brown",
          fontSize: "120%",
        }}
      >
        <div className="mini-details">
          <h4>Name</h4>
          {details.name}
        </div>
        <div className="mini-details">
          {type == "people" ? <h4>Birth Year</h4> : <h4>Terrain</h4>}
          {type == "people" ? details.birth_year : details.terrain}
        </div>
        <div className="mini-details">
          {type == "people" ? <h4>Gender</h4> : <h4>Population</h4>}
          {type == "people" ? details.gender : details.population}
        </div>
        <div className="mini-details">
          {type == "people" ? <h4>Height</h4> : <h4>Climate</h4>}
          {type == "people" ? details.height : details.climate}
        </div>
        <div className="mini-details">
          {type == "people" ? <h4>Skin Color</h4> : <h4>Gravity</h4>}
          {type == "people" ? details.skin_color : details.gravity}
        </div>
        <div className="mini-details">
          {type == "people" ? <h4>Eye Color</h4> : <h4>Rotation Period</h4>}
          {type == "people" ? details.eye_color : details.rotation_period}
        </div>
      </Stack>
    </>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Context } from "../store/appContext.jsx";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

export const Navbar = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container">
        <Link to="/">
          <div className="imgnavbar">
            <img
              src="https://th.bing.com/th/id/OIP.zLHXJbX9jteXJ6bZT32ZbwHaES?pid=ImgDet&rs=1"
              className="img-thumbnail"
              alt=""
            />
          </div>
        </Link>
        <div className="navitulo ml-auto">
          <h1>
            <strong> Star Wars Vlog</strong>
          </h1>
        </div>
          <ListGroup as="ul">
            <DropdownButton id="dropdown-basic-button" title="Favorites">
              {store.favorites.map((favorite) => {
                return (
                  <ListGroup.Item key={favorite.name} as="li">
                    <p>
                      {favorite.name} <div className="mas">+</div>
                      {
                        <Button
                          variant="light"
                          onClick={() => actions.manageFavorites(favorite.name)}
                        >
                          <span>
                            <i className="fas fa-trash-alt"></i>
                          </span>
                        </Button>
                      }
                    </p>
                  </ListGroup.Item>
                );
              })}
            </DropdownButton>
          </ListGroup>
        </div>
    </nav>
  );
};

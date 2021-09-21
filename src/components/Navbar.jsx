import React from "react";
import { ClearAll, Search, Notifications } from "@material-ui/icons";
import { Button,Badge } from "@material-ui/core";
import {NavLink} from "react-router-dom"

const Navbar = () => {

  const style={
    fontWeight:"bold"
  }
  
  return (
    <>
      <div className="container-fluid nav">
        <div className="row flex-grow-1">
          <div className="col-11  mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <NavLink className="navbar-brand" to="/" >
                <img src="/images/netflix_logo.jpg" alt="netflix_logo"/>
              </NavLink>
              <Button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#netflix_navbar"
                aria-controls="netflix_navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <ClearAll />
              </Button>
              <div
                className="collapse navbar-collapse"
                id="netflix_navbar"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/"  activeStyle={style}>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/movies" activeStyle={style}>
                      Movies
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/tvshows" activeStyle={style}>
                      Tv Shows
                    </NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                  <li className="nav-item">
                    <Search className="nav_icons"/>
                  </li>
                  <li className="nav-item">
                    <Badge badgeContent={3} color="secondary">
                      <Notifications className="nav_icons"/>
                    </Badge>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

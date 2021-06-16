
import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

const NavMenu = () =>{
    return(
<div classNameName="home">
    <nav className="nav">
    <div className="container">
      <h1 className="logo"><a href="/">Covid-Care.tn</a></h1>
      <ul>
      <Link to="/">
        <li><a className="current">About us</a></li>
        </Link>
        <li><a href="/services">Ours Services</a></li>
        <Link to="/patient">
        <li><a >Are you patient?</a></li>
        </Link>
        <Link to="/doctors">
        <li><a>Are you doctor?</a></li>
        </Link>
      </ul>
    </div>
  </nav>
  </div>
    )};

    export default NavMenu


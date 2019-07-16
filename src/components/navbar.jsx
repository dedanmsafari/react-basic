import React, { Component } from "react";
//While using stateless functional components
//using object destructuring.
const NavBar = (totalCounters) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  ); f9
};


export default NavBar;




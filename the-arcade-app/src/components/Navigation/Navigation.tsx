import React from "react";
import { NavLink } from "react-router-dom"; 
import './Navigation.css';

function Navigation() {
    return (
      <section className="navigation">
        <nav className="nav">
            <NavLink to="/"> The Arcade </NavLink>
            <NavLink to="/mint"> Mint </NavLink>
            <NavLink to="/leaderboard"> Leaderboard </NavLink>
            <NavLink to="/about"> About </NavLink>
        </nav>
      </section>
    );
  }
  
export default Navigation;
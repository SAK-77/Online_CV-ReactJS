import {Link, NavLink} from "react-router-dom";
import { useRef } from "react";

import './Header.css'

export default function Header() {

  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }

  return(
    <header id="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" onClick={collapseNav} to="/">JOHN DOE</Link>
          <button className="navbar-toggler" ref={navButton} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" ref={linksContainerRef} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" onClick={collapseNav} to="/">ACCUEIL</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" onClick={collapseNav} to="/Services">SERVICES</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" onClick={collapseNav} to="/Realisations">REALISATIONS</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" onClick={collapseNav} to="/Blog">BLOG</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" onClick={collapseNav} to="/Contact">ME CONTACTER</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
import {Link, NavLink} from "react-router-dom";

import './Header.css'

export default function Header() {
  function changeStyleLink() {
    document.addEventListener("DOMContentLoaded", () => {})  
  }

  changeStyleLink();

  return(
    <header id="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">JOHN DOE</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " to="/">ACCUEIL</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/Services">SERVICES</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/Realisations">REALISATIONS</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/Blog">BLOG</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/Contact">ME CONTACTER</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
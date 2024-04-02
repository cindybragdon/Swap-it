import React from 'react';
import {Navigate, Outlet} from "react-router-dom";



const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-sm navbar-dark p-2 fixed-top mb-0">
          <div className="container">
              <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="n_bar">
                  <ul className="navbar-nav  ">
                      <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
                      <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                      <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                      <li className="nav-item"><a className="nav-link" href="/faq">FAQ</a></li>
                      <li className="nav-item"><a className="nav-link" href="/features">Fonctionnalites</a></li>
                      <li className="nav-item"><a className="nav-link" href="/piges">Mes piges</a></li>
                      <li className="nav-item"><a className="nav-link" href="/myaccount">Mon compte {sessionStorage.getItem('user') ? <span className="navbar-span"> ( {JSON.parse(sessionStorage.user).userFirstName} {JSON.parse(sessionStorage.user).userLastName} )</span> : <a></a>} </a></li>



                      {/*{sessionStorage.getItem('user') ? <li className="nav-item"><a className="nav-link">{JSON.parse(sessionStorage.user).userFirstName} {JSON.parse(sessionStorage.user).userLastName}</a></li> : <li></li>}*/}
                  </ul>
              </div>
          </div>
      </nav>
  );
};

export default NavBar;

/*

*/

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
      <nav class="navbar navbar-expand-sm navbar-dark">
          <div class="container">
              <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="n_bar">
                  <ul class="navbar-nav">
                      <li class="nav-item active"><a class="nav-link" href="/">Home</a></li>
                      <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
                      <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
                      <li class="nav-item"><a class="nav-link" href="/faq">FAQ</a></li>
                      <li class="nav-item"><a class="nav-link" href="/features">Fonctionnalites</a></li>
                  </ul>
              </div>
          </div>
      </nav>
  );
};

export default NavBar;

/*

*/

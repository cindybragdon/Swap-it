import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="nav">
            <div className="container">
                <h1 className="logo">
                    <Link to="/">Logo</Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li> 
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/features">Features</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  );
};

export default NavBar;

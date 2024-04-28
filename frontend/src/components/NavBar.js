import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import ImageLogoNavbar from "../images/logoNavbar.jpg"

const NavBar = () => {

    const [countInv, setCountInv] = useState(0);


    useEffect(() => {
        if (sessionStorage.user !== undefined) {
            const url = `http://localhost:9281/api/getCountInvByEmailWantedUserAndAsBeenAnswered?emailWantedUser=${JSON.parse(sessionStorage.user).userEmail}&asBeenAnswered=false`;
            axios.get(url)
                .then(res => setCountInv(res.data))
                .catch(err => console.log(err));
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark p-2 fixed-top mb-0" style={{fontFamily: "Reddit Mono", height: '70px'}}>
            <div className="container">
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                        data-bs-target="#n_bar" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="n_bar">
                    <ul className="navbar-nav  ">
                        <li className="nav-item active">
                            <div>
                            <a className="nav-link" href="/">
                                <img src={ImageLogoNavbar} alt="Home" style={{height: '60px'}}/>
                            </a>
                            </div>
                        </li>
                        <li className="nav-item mt-3"><a className="nav-link" href="/about">À propos</a></li>
                        <li className="nav-item mt-3"><a className="nav-link" href="/contact">Contactez-nous</a></li>
                        <li className="nav-item mt-3"><a className="nav-link" href="/faq">FAQ</a></li>
                        {/* <li className="nav-item"><a className="nav-link" href="/features">Fonctionnalites</a></li>*/}
                        <li className="nav-item mt-3"><a className="nav-link" href="/piges">Mes piges</a></li>
                        <li className="nav-item mt-3"><a className="nav-link" href="/inv">Mes
                            invitations {countInv > 0 ?
                                <span className="invNotif">{countInv}</span> : ''}</a></li>
                        <li className="nav-item mt-3"><a className="nav-link" href="/myaccount">Mon
                            compte {sessionStorage.getItem('user') ? <span
                                    className="navbar-span"> ( {JSON.parse(sessionStorage.user).userFirstName} {JSON.parse(sessionStorage.user).userLastName} )</span> :
                                <a></a>} </a></li>
                        <li className="nav-item mt-3">
                            <Link className="nav-link" to="/logOut">Me déconnecter</Link>
                        </li>


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

import React from 'react';
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import BackToTopButton from "../components/BackToTopButton";
import ImagePige from "../images/addPige.jpg"
import BGPiges from '../images/MesPigesFemme.jpg'
import axios from "axios";


function Piges() {

    var sectionStyle = {
        backgroundImage: `url(${BGPiges})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '85vh',
        fontFamily: "Reddit Mono",
        border: 'white solid 3px',
        minWidth: '99.5vw'

    }


    const navigate = useNavigate();
    const [listUserPige, setListUserPige] = useState([]);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const urlGetUser = `http://localhost:9281/api/getUserById?idUser=${JSON.parse(sessionStorage.user).idUser}`;
        axios.get(urlGetUser)
            .then(res => setCurrentUser(res.data))
            .catch(err => console.log(err));

    }, []);

    useEffect(() => {
        const urlGetListUserPige = `http://localhost:9281/api/getListUserPigeFromIdUser?idUser=${JSON.parse(sessionStorage.user).idUser}`;
        axios.get(urlGetListUserPige)
            .then(res => setListUserPige(res.data))
            .catch(err => console.log(err));

    }, []);


    const handleClickCreatePige = () => {
        navigate('/piges/creation-piges');
    }

    const handlePigeClick = (userPige) => {

        navigate(`/piges/${userPige.pige.pigeName}`, {state: userPige});
    }

    return (
        <div id="container-my-piges" className='container bg-primary text-center' style={sectionStyle}>
            <div className="pt-3">
                <h2 className="title-piges " style={{color: '#FF3991'}}>Bonjour, {currentUser.userFirstName}, voici vos
                    piges!</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col pb-3">
                    <div className="card border border-dark" style={{
                        height: '30vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img src={ImagePige} className="card-img-top-my-wish-list" alt="..."
                             style={{
                                 height: '20vh',
                                 width: '20vh',
                                 display: 'block',
                                 margin: 'auto',
                                 objectFit: 'cover'
                             }}/>
                        <button type="button" className="btn btn-info m-2" onClick={handleClickCreatePige}>Créer une
                            pige!
                        </button>
                    </div>
                </div>

                {listUserPige.map((UserPige, index) => (
                    UserPige.pige.active === true ?
                        <div className="col pb-3 " key={index} onClick={() => handlePigeClick(UserPige)}>
                            <div className="card" style={{height: '30vh'}}>
                                {new Date(UserPige.pige.pigeEndDate) > new Date() ?
                                    <div id="piges-box"
                                         className="title-card-piges card-header bg-danger">{UserPige.pige.pigeName}</div>
                                    : <div id="piges-box"
                                           className="title-card-piges card-header bg-warning">{UserPige.pige.pigeName}</div>}
                                <div className="card-body">
                                    <p className="card-text"> Pige organisée par
                                        : {UserPige.pige.userAdmin.userFirstName} {UserPige.pige.userAdmin.userLastName}</p>
                                    {new Date(UserPige.pige.pigeEndDate) > new Date() ? <>
                                        <p className="card-text">Cette pige se terminera le :</p>
                                        <p>{UserPige.pige.pigeEndDate}</p>
                                    </> : <p className="card-text">Cette pige est terminée</p>}
                                </div>
                            </div>
                        </div> : null


                ))}

            </div>

            <BackToTopButton/>
        </div>
    );
}

export default Piges;


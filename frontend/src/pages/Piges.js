import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import BackToTopButton from "../components/BackToTopButton";
import ImagePige from "../images/NewPige.jpg"
import BGPiges from '../images/MesPigesFemme.jpg'
import axios from "axios";


function Piges() {

    var sectionStyle = {
        backgroundImage: `url(${BGPiges})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minWidth: '100vw',
        border: 'white solid 3px'
    }


    const navigate = useNavigate();

    const [listUserPige, setListUserPige] = useState([]);
    const [currentUser, setCurrentUser] =useState({});

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
        alert('Button clicked');
        console.log('Button clicked');
    }

    const handlePigeClick = (userPige) => {

        navigate(`/piges/${userPige.pige.pigeName}`, {state: userPige});
        console.log(userPige);
    }


    return (
        <div className='container row bg-primary text-center' style={sectionStyle}>
            <div >
                <div className="pt-3">
                    <h2 className="bg-white
                    " style={ {color: '#FF3991'}} >Bonjour, {currentUser.userFirstName}, voici vos piges! </h2>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">

                    <div className="col pb-5">
                        <div className="card h-auto">
                            <img src={ImagePige} className="card-img-top-my-wish-list" alt="..."/>
                            <div className="card-body">
                                <div className="card" onClick={handleClickCreatePige}>
                                    <div className="card-body">
                                        <h5 className="card-title">Créer une pige!</h5>
                                        <p className="card-text"><i className="bi bi-plus-lg"></i></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row row-cols-1 row cols-med-4 g-4">
                    {listUserPige.map(UserPige =>

                        <div className="col pb-5" onClick={() => handlePigeClick(UserPige)}>

                            <div className="card h100">
                                <div className="card-body">
                                    <h5 className="card-title">{UserPige.pige.pigeName}</h5>
                                    <p className="card-text">Cette pige se terminera le {UserPige.pige.pigeEndDate}</p>
                                </div>
                            </div>
                        </div>


                    )}
                    </div>

                </div>
            </div>
            <div>
                <BackToTopButton/>
            </div>

        </div>

    )
        ;
}
;
export default Piges;


import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import BackToTopButton from "../components/BackToTopButton";
import ImagePige from "../images/NewPige.jpg"
import BGPiges from '../images/BackgroundMesPiges.jpg'


function Piges() {

    var sectionStyle = {
        backgroundImage: `url(${BGPiges})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minWidth: '100vw'
    }


    const navigate = useNavigate();

    const [listUserPige, setListUserPige] = useState([]);

    const [selectedPige, setSelectedPige] = useState(null);

    const currentUser = JSON.parse(sessionStorage.user);

    //Olivier :
    //https://designcode.io/react-hooks-handbook-fetch-data-from-an-api


    useEffect(() => {
        const url = `http://localhost:9281/api/getListUserPigeFromIdUser?idUser=${currentUser.idUser}`;

        const fecthData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setListUserPige(data);

            } catch (error) {
                console.log("error", error);
            }
        }
        fecthData();
    }, []);


    const handleClick = () => {
        navigate('/piges/creation-piges');
        alert('Button clicked');
        console.log('Button clicked');
    }

    const handlePigeClick = (userPige) => {
        setSelectedPige(userPige);
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
                                <div className="card" onClick={handleClick}>
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


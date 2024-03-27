import React from 'react';
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import BackToTopButton from "../components/BackToTopButton";



function Piges() {


    const navigate = useNavigate();

    const [listUserPige, setListUserPige] = useState([]);
    const [idUser, setUserId] = useState(1);

    const [selectedPige, setSelectedPige] = useState(null);


    //Olivier :
    //https://designcode.io/react-hooks-handbook-fetch-data-from-an-api


    useEffect(() => {
        const url = `http://localhost:9281/api/getListUserPigeFromIdUser?idUser=${idUser}`;

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
        console.log('Button clicked')
    }

    const handlePigeClick = (userPige) => {
        setSelectedPige(userPige);
        navigate(`/piges/${userPige.pige.pigeName}`, {state: userPige});
        console.log(userPige);
    }





    return (
        <div className='container col justify-content-center text-center min-vh-100'>

                <div className="col m-5">
                    <div className="card" onClick={handleClick} >
                            <div className="card-body" >
                                <h5 className="card-title">Créer une nouvelle pige</h5>
                                <p className="card-text"><i className="bi bi-plus-lg"></i></p>
                            </div>
                    </div>
                </div>


                {listUserPige.map(userPige =>
                        <div className="col m-5" onClick={() => handlePigeClick(userPige)}>
                            <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{userPige.pige.pigeName}</h5>
                                        <p className="card-text">{userPige.pige.pigeEndDate}</p>
                                    </div>
                            </div>
                        </div>
                )}



            <div>
                <BackToTopButton/>
            </div>
        </div>
    );
}

export default Piges;
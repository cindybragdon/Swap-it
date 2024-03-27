import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";


const MyPige = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const selectedPige = location.state;

    const [listUserPige, setListIUserPige] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:9281/api/getListUserPigeFromIdPige?idPige=${selectedPige.pige.idPige}`)
            .then(response => response.json())
            .then(data => setListIUserPige(data))
            .catch(error => console.error(error))
            console.log(selectedPige.idPige)
    }, [selectedPige.idPige]);


    const handleButtonClick = (userPige) => {
        navigate(`/piges/${selectedPige.pige.pigeName}/myWishList`, {state: userPige});
        console.log(userPige);
    }
    const handleButton2Click = () => {
        navigate(`/piges`);
    }


    return (
        <div className='container row justify-content-center text-center oui bg-primary min-vh-100'>
            <div className='col-sm-4 mt-5'>
                <h1>Coucou myPige</h1>
                <p> Lorem ipsum dolor sit amet.</p>
                <h1>{selectedPige.pige.pigeName}</h1>
                <h1>{selectedPige.user.userFirstName}</h1>
            </div>

            <div className="col-sm-4">
                <div className="w-2">
                {listUserPige.map(userPige =>

                    <div className="card m-5">
                        <div className="container row card-body">
                            <img src={userPige.userPigeImage} /> <h6 className="card-title">Nom : {userPige.user.userFirstName} {userPige.user.userLastName} Pseudo : {userPige.userPigePseudo}</h6>

                            <button onClick={() => handleButtonClick(userPige)}> My Wish List</button>

                        </div>
                    </div>
                )}
                </div>

            </div>


            <div className="col-sm-4 mt-5">
                <button onClick={() => handleButton2Click()}> My Piges</button>
            </div>
        </div>

    );
}

export default MyPige;

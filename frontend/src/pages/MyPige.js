import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";


const MyPige = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const selectedUserPige = location.state;

    const [listUserPige, setListIUserPige] = useState([]);

    console.log(selectedUserPige);


    useEffect(() => {
        fetch(`http://localhost:9281/api/getListUserPigeFromIdPige?idPige=${selectedUserPige.pige.idPige}`)
            .then(response => response.json())
            .then(data => setListIUserPige(data))
            .catch(error => console.error(error))
            console.log(selectedUserPige.idPige)


    }, [selectedUserPige.idPige]);


    const handleButtonClick = (userPige) => {
        navigate(`/piges/${selectedUserPige.pige.pigeName}/myWishList`, {state: userPige});
        console.log(userPige);
    }
    const handleButton2Click = () => {
        navigate(`/piges`);
    }


    return (
        <div className='container row justify-content-center text-center oui bg-primary min-vh-100'>
            <div className='col-sm-4 mt-5'>
                <h1>Coucou {selectedUserPige.userPigePseudo}</h1>
                <p>{selectedUserPige.pige.pigeDescription}</p>
                <h1>{selectedUserPige.pige.pigeName}</h1>
                <h1>{selectedUserPige.user.userFirstName}</h1>
            </div>

            <div className="col-sm-4">
                <div className="w-2">
                {listUserPige.map(userPige =>

                    <div className="card m-5">
                        <div className="container row card-body">
                            <img src={selectedUserPige.userPigeImage} /> <h6 className="card-title">Nom : {userPige.user.userFirstName} {userPige.user.userLastName} Pseudo : {userPige.userPigePseudo}</h6>

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

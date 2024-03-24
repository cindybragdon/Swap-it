import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";


const MyPige = () => {
    /*
    * @KarolannMauger
    * @Date : 2024-03-21
    * @Revision1 :
    * Petit problème pour get le idUserPige dans ma list, j'essaie de trouver le bug, voir avec moi pour explication.
     */

    const navigate = useNavigate();

    const location = useLocation();
    const selectedPige = location.state.selectedPige;

    const [idUserPige, setIdUserPige] = useState('');



    const handleButtonClick = (selectedPige) => {
        navigate(`/piges/${selectedPige.pige.pigeName}/myWishList`, {state: selectedPige});
        console.log(selectedPige);
    }
    const handleButton2Click = () => {
        navigate(`/piges`);
    }


    return (
        <div className='renderingElement oui'>
            <div className='container'>
                <h1>Coucou myPige</h1>
                <p> Lorem ipsum dolor sit amet.</p>
                <h1>{selectedPige.pige.pigeName}</h1>
                <h1>{selectedPige.user.userFirstName}</h1>
            </div>
            {console.log(selectedPige)}
            <div className="container">
                <button onClick={() => handleButtonClick(selectedPige)}> My Wish List </button>
            </div>
            <div className="container">
                <button onClick={() => handleButton2Click()}> My Piges </button>
            </div>
        </div>

    );
}

export default MyPige;

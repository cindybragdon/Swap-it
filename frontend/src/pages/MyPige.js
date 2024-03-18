import React from 'react';
import {useLocation} from "react-router-dom";


const MyPige = () => {

    const location = useLocation();
    const selectedPige = location.state.selectedPige;

    return (
        <div className='hero oui'>
            <div className='container'>
                <h1>Coucou myPige</h1>
                <p> Lorem ipsum dolor sit amet.</p>
                <h1>{selectedPige.pige.pigeName}</h1>
                <h1>{selectedPige.user.userFirstName}</h1>
            </div>
            {console.log(selectedPige)}
        </div>

    );
}

export default MyPige;

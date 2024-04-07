import React, {useState} from 'react';
import ImagePigeCreate from "../images/Chapeau.jpg"

import FormCreationPige from "../components/FormCreationPige";





const CreationPiges = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImagePigeCreate})`,
        width: '50vw',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

    }



    return (

        <div className="bg-white " style={{ marginBottom: '0.5rem', textColor:'black' }}>
            <FormCreationPige />
            <div className="col-sm">
                <div className='card justify-content-center min-vh-100' style={sectionStyle}>
                </div>
            </div>

        </div>

    );
}

export default CreationPiges;

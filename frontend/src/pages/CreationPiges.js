import React, {useState} from 'react';
import ImagePigeCreate from "../images/nomsPiges.jpg"

import FormCreationPige from "../components/FormCreationPige";





const CreationPiges = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImagePigeCreate})`,
        width: '50vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

    }



    return (

        <div className="bg-white d-flex" style={{ height: '100vh' }}>

            <FormCreationPige />
            <div className="col-sm">
                <div className=" " style={sectionStyle}>
                </div>
            </div>

        </div>

    );
}

export default CreationPiges;

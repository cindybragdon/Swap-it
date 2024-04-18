import React, {useState} from 'react';
import ImagePigeCreate from "../images/nomsPiges.jpg"

import FormCreationPige from "../components/FormCreationPige";





const CreationPiges = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImagePigeCreate})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        minHeight: '85vh',
        fontFamily: "Reddit Mono",
        border: 'white solid 3px'
    }



    return (

        <div  style={sectionStyle}>

            <div >
                <div >
                    <FormCreationPige />
                </div>
            </div>

        </div>

    );
}

export default CreationPiges;

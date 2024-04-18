import React, {useEffect, useState} from 'react';
import ImageModif from "../images/bgPseudo.jpg";
import {useLocation} from "react-router-dom";
import http from "../http/http";
import axios from "axios";



const ModifPseudoImagePige = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageModif})`,
        width: '100vw',
        minHeight: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: 0,
        margin: 0
    };

    const location = useLocation();
    const selectedUserPige = location.state;

    const [pseudo, setPseudo] = useState(selectedUserPige.userPigePseudo);
    const [imagePige, setImagePige] = useState(selectedUserPige.userPigeImage);

    const formUpdateUserPige = {
        userPige: {
            idUserPige:selectedUserPige.idUserPige,
            userPigePseudo: pseudo,
            userPigeImage: imagePige
        }
    }
    const onSubmit = () => {
        try {
            axios.put(`getPWDByIdUser?idUser=${selectedUserPige.idUserPige}`, formUpdateUserPige);

        } catch (error) {
            console.error(error);
        }
    }
    return (

    <div className="row justify-content-left" style={sectionStyle}>
        <div className="card text-center card w-25 m-5  " style={{ height: '440px', overflow: 'auto',  fontFamily: "Reddit Mono"}}>
            <div className="card-header h5 text-white " style={{backgroundColor: "#05521A"}}>Modifiez vos infos pour la pige {selectedUserPige.pige.pigeName}!</div>
            <div className="card-body px-2">

                <p className="card-text ">
                    Modifiez vos infos
                </p>

                <form onSubmit={onSubmit}>
                    <div className="text-start">
                        <label>Pseudo</label>
                    </div>
                    <div>
                        <input type="text" name="pseudo" id="typePseudo" className="form-control my-3"
                               placeholder={"Votre pseudo"} value={pseudo}
                               onChange={event => setPseudo(event.target.value)} required/>
                    </div>



                    <div className="text-start">
                        <label>Image (doit être un lien https vers une image)</label>
                    </div>
                    <div>
                        <input name="urlImage" id="typeImage"
                               className="form-control my-3" placeholder={"Le lien https vers votre image : "}
                               value={imagePige}
                               onChange={event => setImagePige(event.target.value)}/>

                    </div>

                    <br/>
                    <div className="form-group row">
                        <div className="col-sm-20 text-center">
                            <button type="submit" style={{backgroundColor:"#549517"}} className="btn  w-30">Modifiez vos informations!</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>

);
};

export default ModifPseudoImagePige
import React, {useState} from 'react';
import ImageModif from "../images/bgPseudo.jpg";
import {useLocation, useNavigate} from "react-router-dom";
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
    const navigate = useNavigate();
    const location = useLocation();
    const selectedUserPige = location.state;

    const [pseudo, setPseudo] = useState(selectedUserPige.userPigePseudo);
    const [imagePige, setImagePige] = useState(selectedUserPige.userPigeImage);

    const formUpdateUserPige = {

        idUserPige:selectedUserPige.idUserPige,
        userPigePseudo: pseudo,
        userPigeImage: imagePige

    }

    console.log(selectedUserPige);
    const onSubmit = () => {
        try {
            axios.put(`http://localhost:9281/api/updateUserPigePseudoAndImage`, formUpdateUserPige);
            navigate("/piges")

        } catch (error) {
            console.error(error);
        }
    }
    return (

    <div className="row justify-content-center" style={sectionStyle}>
        <div className="card text-center card w-50 mt-5 " id="container-update">
            <div className="card-header h5 text-white bg-info">Modifier votre compte Swap-it!</div>
            <div className="card-body px-5">

                <p className="card-text py-2">
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
                            <button type="submit" className="btn btn-info w-30">Modifier vos informations!</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>

);
};

export default ModifPseudoImagePige
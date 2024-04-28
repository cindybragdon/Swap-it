import React, {useState} from 'react';
import ImageModif from "../images/bgPseudo.jpg";
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";


const ModifPseudoImagePige = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageModif})`,
        width: '100vw',
        minHeight: '85vh',
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

        idUserPige: selectedUserPige.idUserPige,
        userPigePseudo: pseudo,
        userPigeImage: imagePige

    }

    console.log(selectedUserPige);

    const onSubmit = () => {
        try {
            axios.put(`http://localhost:9281/api/updateUserPigePseudoAndImage`, formUpdateUserPige);
            navigate(`/piges/${selectedUserPige.pige.pigeName}`, {state: selectedUserPige});
            window.location.reload();

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="row justify-content-left" style={sectionStyle}>
            <div id="modif-piges" className="card text-center card w-25 m-5 mt-0"  // Ici, mt-1 est remplacé par mt-0 pour diminuer la marge du haut
                 style={{height: '510px', overflow: 'auto', fontFamily: "Reddit Mono"}}>
                <div className="card-header h5 text-white " style={{backgroundColor: "#05521A"}}>
                    Modifiez vos infos pour la pige {selectedUserPige.pige.pigeName}!
                </div>
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
                            <div className="col-sm-20 text-center ">
                                <button type="submit" style={{backgroundColor: "#549517"}}
                                        className="btn  w-30">Modifiez vos informations!
                                </button>
                                <div>
                                    <Link to="/FAQ" className="btn mt-4"
                                          style={{backgroundColor: '#34D1D8', color: 'white'}}>Aide FAQ - Comment insérer les URL </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default ModifPseudoImagePige
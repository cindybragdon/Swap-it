import React, {useState} from 'react';
import ImageEmail from "../images/email.jpg";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";


const Email = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageEmail})`,
        width: '100vw',
        minHeight: '85vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        fontFamily: "Reddit Mono",
        padding: 0,
        margin: 0
    };



    const navigate = useNavigate();
    const location = useLocation();
    const selectedUser = location.state;

    //const [message, setMessage] = useState(selectedUser.userMessage);

    const formUpdateUser = {
        //idUser: selectedUser.idUser,
        //userMessage: message
    };

    console.log(selectedUser);

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:9281/api/updateUserMessage`, formUpdateUser);
            navigate("/destinationPath"); // Update with actual path
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="row justify-content-left" style={sectionStyle}>
            <div className="card text-center w-50 m-5" style={{ height: '530px', overflow: 'auto', backgroundColor: "#FCFEE2" }}>
                <div className="card-header h5 text-white" style={{backgroundColor : "#008DFF"}}>Message Discret</div>
                <div className="card-body px-2">
                    <form onSubmit={onSubmit}>
                        <div className="text-center mb-2" style={{fontFamily : "Reddit mono"}}><label>Ce message sera envoyé
                            en mode "discretion", ce qui veut dire
                            la personne qui recevra ce courriel ne <span
                                style={{color: "red"}}>saura pas qui vous êtes!  </span> Si votre but est de rester
                            anonyme, c'est parfait. Mais si vous attendez une réponse de cette personne, vous avez 2 options :

                            <ul className="mt-3" style={{ listStyleType: "none" }}>
                                <li className="mb-3"><span style={{color: "red"}}>Option # 1, écrivez votre nom dans ce message!</span>
                                </li>
                                <li><span style={{color: "red"}}>Option # 2, écrivez ceci pour vous identifier : "Pour me répondre,
                                rend toi dans la pige (nom de la pige) et clique sur le bouton "Écrire au participant qui a pigé
                                    (nom de la personne que VOUS avez pigé)".</span>
                                </li>
                            </ul>
                        </label>
                        </div>


                        <div className="mb-3 mt-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                          placeholder="Votre nom (facultatif) et votre message ici.">
                                          </textarea>

                            </div>

                        <div className="form-group row">
                            <div className="col-sm-20 text-center">
                                <button type="submit" className="btn text-white" style={{backgroundColor: "#008DFF"}}>Envoyer!
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Email;
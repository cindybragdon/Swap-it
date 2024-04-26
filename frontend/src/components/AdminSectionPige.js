import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AdminSectionPige = (props) => {

    const selectedUserPige = props.selectedUserPige;
    const listUserPige = props.listUserPige;
    const navigate = useNavigate();
    let pigeDate = new Date(selectedUserPige.pige.pigeEndDate);


    let currentDate = new Date();
    let mouseDate = new Date();

    document.onmousemove = () => {
        currentDate = new Date();
        if (currentDate.getFullYear() > mouseDate.getFullYear() || currentDate.getMonth() > mouseDate.getMonth() || currentDate.getDay() > mouseDate.getDay()) {
            window.location.reload();
        }
        mouseDate = new Date();

        //console.log(currentDate);
        //console.log(pigeDate);
    }


    const handleClickStartPige = () => {
        try {
            if (JSON.parse(sessionStorage.user).idUser === selectedUserPige.pige.userAdmin.idUser) {
                const minimumUserPige = 3;
                if (listUserPige.length >= minimumUserPige) {
                    const urlCreateAllPersonPicked = `http://localhost:9281/api/createAllUserPigeWithUserPickedForPige?idPige=${selectedUserPige.pige.idPige}`
                    axios.post(urlCreateAllPersonPicked)
                        .then(response => {
                            if (response.data === "ACK-100") {
                                alert('La pige a été lançée!');
                                window.location.reload();
                            } else {
                                alert('Problème en essayant de lançer la pige...');
                            }
                        })
                        .catch(error => console.error(error));
                } else {
                    alert(`Impossible de lancer la pige : il doit y avoir au moins ${minimumUserPige} utilisateurs qui ont accepté leur invitation.`)
                }
            }
        } catch (e) {
            console.error(e);
        }
    }
    const handleClickAddPeople = () => {
        try {
            if (JSON.parse(sessionStorage.user).idUser === selectedUserPige.pige.userAdmin.idUser) {
                sessionStorage.setItem('pigeToAddPeopleTo', JSON.stringify(selectedUserPige.pige));
                navigate('/addPeople');
            }
        } catch (e) {
            console.error(e);
        }
    }

    const handleButtonUpdatePige = () => {
        try {
            if (JSON.parse(sessionStorage.user).idUser === selectedUserPige.pige.userAdmin.idUser) {
                navigate(`/piges/${selectedUserPige.pige.pigeName}/UpdatePige`, {state: selectedUserPige});
            }
        } catch (e) {
            console.error(e);
        }
    }


    const handleClickDeletePige = () => {
        try {
            if (window.confirm('Voulez-vous vraiment annuler la pige?')) {
                if (JSON.parse(sessionStorage.user).idUser === selectedUserPige.pige.userAdmin.idUser) {
                    const url = `http://localhost:9281/api/deletePige?idPige=${selectedUserPige.pige.idPige}`;
                    axios.put(url)
                        .catch(err => {
                            console.error(err)
                        });
                    console.log('La pige a bien été annulée.');
                    navigate(`/piges`);
                } else {
                    // Do nothing!
                    console.log("Ouf, la pige n'a pas été annulée.");
                }
            }
        } catch (e) {
            console.error(e);
        }

    }


    return (
        <div>
            {currentDate < pigeDate ?
                <div className="mt-3">
                    {JSON.parse(sessionStorage.user).idUser === selectedUserPige.pige.userAdmin.idUser ?
                        <div className=" border border-2 p-3 " id="espaceAdmin">
                            <h4 className="text-start"> Espace Admin pour l'organisateur de la
                                pige {selectedUserPige.pige.pigeName} </h4>
                            {selectedUserPige.pige.pigeState === "CREATED" ?
                                <div className="d-flex flex-column  justify-content-start align-items-start ">
                                    <button type="submit" className="liste p-2 rounded" onClick={handleClickStartPige}
                                            style={{backgroundColor: '#FFD801', color: 'white'}}>Lancer la pige!
                                    </button>
                                </div> : null}
                            <div className="d-flex flex-column  justify-content-start align-items-start ">
                                <div className="mt-2 ">
                                    <button className="liste p-2 rounded"
                                            style={{backgroundColor: '#FFD801', color: 'white'}}
                                            onClick={() => handleButtonUpdatePige()}> Modifier la pige
                                    </button>
                                </div>
                                {selectedUserPige.pige.pigeState === "CREATED" ?
                                    <button onClick={handleClickAddPeople} className="liste p-2 rounded mt-2"
                                            style={{backgroundColor: '#FFD801', color: 'white'}}>Envoyer des
                                        invitations
                                    </button> : null}


                                <button type="submit" className="liste p-2 rounded mt-2"
                                        style={{backgroundColor: '#EB0134', color: 'white'}}
                                        onClick={() => handleClickDeletePige()}>Annuler la pige
                                </button>


                            </div>
                        </div> : null}
                </div> : null}
        </div>
    );
}

export default AdminSectionPige;
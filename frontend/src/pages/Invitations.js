import React, {useEffect, useState} from "react";


import axios from "axios";
import ImageInvitation from "../images/Invitations.jpg";

const Invitations = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageInvitation})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '85vh',
        border: 'white solid 3px',
        minWidth: '99vw'

    }



    const [tabInvitations, setTabInvitations] = useState([]);

     useEffect(() => {
        axios.get(`http://localhost:9281/api/getAllInvitationsFromUserEmail?userEmail=${JSON.parse(sessionStorage.user).userEmail}`)
            .then(res => setTabInvitations(res.data))
            .catch(err => console.log(err));
    }, []);


     //console.log(tabInvitations)


     function onClickInv(inv, isAccepted, index) {
         tabInvitations.splice(index, 1);
         setTabInvitations(tabInvitations);
         console.log("inv : " + tabInvitations);
         const formsUserWithPige = {
             user: {
                 idUser: JSON.parse(sessionStorage.user).idUser
             },
             pige: {
                 idPige: inv.pige.idPige
             }
         }
         axios.put(`http://localhost:9281/api/updateInv?idInvToUpdate=${inv.idInvitation}&isAccepted=${isAccepted}`, formsUserWithPige)
             .catch(err => console.log(err));
         window.location.reload();
     }

     console.log(tabInvitations);

    return (
        <div className='container bg-primary' style={{ ...sectionStyle, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="pt-3 text-center">
                <h2 className="title-piges" style={{color: '#FF3991'}}>
                    Bonjour, {JSON.parse(sessionStorage.user).userFirstName}, voici vos invitations!
                </h2>
            </div>
            {tabInvitations != null ?
                tabInvitations.map((inv, index) => (
                    !inv.asBeenAnswered ?
                        inv.pige.pigeState === "CREATED" ?
                        <div key={index} className="container-sm text-center  p-5 m-2"
                             style={{
                                 backgroundColor: "#7F0A7F",
                                 fontFamily: "Reddit Mono",
                                 width: '600px',
                                 borderRadius: '60%',
                                 borderStyle: 'solid',
                                 borderWidth: '5px',
                                 borderColor: '#4160CC',
                                 color: "white"
                             }}>
                            <p>Vous avez été invité à la pige {inv.pige.pigeName}</p>
                            <p>Par : {inv.pige.userAdmin.userFirstName} {inv.pige.userAdmin.userLastName}</p>
                            <button className="m-1" onClick={() => onClickInv(inv, true, index)}>Accepter l'invitation</button>
                            <button onClick={() => onClickInv(inv, false, index)}>Refuser L'invitation</button>
                        </div> : null : null
                )) :
                <div className="pt-3 text-center">
                    <h2 className="title-piges" style={{color: '#FF3991'}}>
                        Pas d'invitations!
                    </h2>
                </div>
            }
        </div>
    );

}

export default Invitations;

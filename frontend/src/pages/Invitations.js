import {useGetAxi} from "../axi/AxiFunc";
import {useEffect, useState} from "react";
import http from "../http/http";


import axios from "axios";

const Invitations = () => {




    const [tabCustomers, setTabCustomers] = useState([]);

     useEffect(() => {
        axios.get(`http://localhost:9281/api/getAllInvitationsFromUserEmail?userEmail=${JSON.parse(sessionStorage.user).userEmail}`)
            .then(res => setTabCustomers(res.data))
            .catch(err => console.log(err));
    }, []);



     function onClickInv(inv, isAccepted) {

         const formsUserWithPige = {
             user: {
                 idUser: JSON.parse(sessionStorage.user).idUser
             },
             pige: {
                 idPige: inv.pige.idPige
             }
         }
         axios.put(`http://localhost:9281/api/updateInv?idInvToUpdate=${inv.idInvitation}&isAccepted=${isAccepted}`, formsUserWithPige)
             .then(res => setTabCustomers(res.data))
             .catch(err => console.log(err));

     }



    return (
        <div>
            <p>Vos invitations : </p>
            {tabCustomers != null ?
                tabCustomers.map((inv) => (
                    !inv.asBeenAnswered ?
                        <div className="container-sm justify-content-center text-center bg-danger rounded-4 border p-3">
                            <p>Vous avez été invité à la pige {inv.pige.pigeName} </p>
                            <p>Par : {inv.pige.userAdmin.userFirstName} {inv.pige.userAdmin.userLastName}</p>
                            <button onClick={() => onClickInv(inv, true)}>Accepter l'invitation</button> <button onClick={() => onClickInv(inv, false)}>Refuser L'invitation</button>
                        </div> : ''
                )) : <p></p>
            }
        </div>
    )
}

export default Invitations;

/**
 * let listOfInv = [];
 *       getAllInv()
 *          .then((response) => response.json())
 *          .then((value) => {return value});
 *
 *      const getValueForList = () => {
 *          getAllInv.then((response) => {return response();});
 *
 *      }
 *
 *      listOfInv = getValueForList();
 */
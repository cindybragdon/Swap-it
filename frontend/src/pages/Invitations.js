import {getAllInv} from "../axi/AxiFunc";
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



    return (
        <div>
            <p>Vos invitations : </p>
                {tabCustomers.map((inv) => (

                <div>
                    <p>Vous avez été invité à la pige {inv.pige.pigeName} </p>
                </div>
            ))}
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
import {getAllInv} from "../axi/AxiFunc";
import {useState} from "react";

const Invitations = async () => {

    let listOfInv = [];
     await getAllInv()
         .then((response) => response.json())
         .then((value) => {return value});

     const getValueForList = () => {
         getAllInv.then((response) => {return response();});

     }

     listOfInv = getValueForList();

    return (
        <div>
            <p>Vos invitations : </p>
                {listOfInv.map((inv) => (
                <div>
                    <p>Vous avez été invité à la pige {inv.pige.pigeName} </p>
                </div>
            ))}
        </div>
    )
}

export default Invitations;
import http from "../http/http";
import {connectAcc} from "./AxiFunc";

export async function createAcc (form){
    let flag = false;
    try {
        //console.log(formsCreateAccount);
        const response = await http.post(`/createShadowAndUser`, form)
            .then(response => {
                console.log(response.data);
                if (response.data === "ACK-100") {
                    connectAcc(form);
                    flag = true;
                } else {
                    throw new Error("Erreur lors de la création du compte");
                }
            });
        return flag;
    } catch (error) {
        console.error(error);
    }

}


export async function createPige (formToCreatePige) {
    let flag = false;
    try {
        const response = await http.post(`/createUserPigeWithPige`, formToCreatePige)
            .then(response => {
                console.log(response.data);
                if (response.statusText === "ACK-400") {
                    flag = true;
                } else {
                    throw new Error("Erreur lors de la création de la pige");
                }
            })
        return flag;
    } catch (error) {
        console.error(error);
    }
}


export async function createInvitations (listOfEmailsToSendInv) {
    let flag = false;
    try {
        const response = await http.post(`/createInvitation?idUser=${JSON.parse(sessionStorage.user).idUser}`, listOfEmailsToSendInv)
            .then(response => {
                console.log(response.data);
                if (response.statusText === "ACK-400") {
                    flag = true;
                } else {
                    throw new Error("Erreur lors de la création de la pige");
                }
            })
        return flag;
    } catch (error) {
        console.error(error);
    }
}
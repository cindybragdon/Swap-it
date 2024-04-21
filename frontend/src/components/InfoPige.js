import React from "react";

const InfoPige = (props) => {
    const selectedUserPige = props.selectedUserPige;

    return (
        <div className="border border-2 p-2" id="infoPiges">
            <h5 className="text-start">Espace Pige</h5>
            <h5 className="text-start">Description de la pige : </h5>
            <p className="text-start">{selectedUserPige.pige.pigeDescription}</p>
            <div className="d-flex ">
                <h5>Les invitations ont été envoyées le : </h5>
                <p>{selectedUserPige.pige.pigeTimestampCreation}</p>
            </div>
            <div className="d-flex">
                <h5 className="text-start">L'organisateur de cette pige est : </h5>
                <p>{selectedUserPige.pige.userAdmin.userFirstName}</p>
            </div>
            <div className="d-flex">
                <h5 className="text-start">Date de l'échange : </h5>
                <p>{selectedUserPige.pige.pigeEndDate}</p>
            </div>
            <div className="d-flex">
                <h5 className="text-start">Montant suggéré : </h5>
                <p>{selectedUserPige.pige.pigeSuggestedMoneyAmount} $</p>
            </div>
        </div>
    );
}
export default InfoPige;
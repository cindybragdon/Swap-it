import React from "react";

const InfoPige = (props) => {
    const selectedUserPige = props.selectedUserPige;


    return (
        <div className="border border-2 p-2" id="infoPiges">
            <h4 className="text-start">Espace Pige</h4>
            <div className="d-flex">
                <h5 className="text-start">Description de la pige: &nbsp;</h5>
                <h5 className="text-start">{selectedUserPige.pige.pigeDescription}</h5>
            </div>
            <div className="d-flex ">
                <h5>Les invitations ont été envoyées le: &nbsp;</h5>
                <h5>{selectedUserPige.pige.pigeTimestampCreation}</h5>
            </div>
            <div className="d-flex">
                <h5 className="text-start">L'organisateur de cette pige est: &nbsp;</h5>
                <h5> {selectedUserPige.pige.userAdmin.userFirstName}</h5>
            </div>
            <div className="d-flex">
                <h5 className="text-start">Date de l'échange: &nbsp;</h5>
                {new Date(selectedUserPige.pige.pigeEndDate) > new Date() ?
                    <h5>{selectedUserPige.pige.pigeEndDate}</h5> :
                    <h5 className="text-danger">Cette pige est terminée</h5>}
            </div>
            <div className="d-flex">
                <h5 className="text-start">Montant suggéré: &nbsp;</h5>
                <h5>{selectedUserPige.pige.pigeSuggestedMoneyAmount} $</h5>
            </div>
        </div>
    );
}
export default InfoPige;
import React from "react";

const ShowInvitationSectionPige = (props) => {

    const listInvitation = props.listInvitation;
    return (
        <div className="border border-2  mt-3 ">
            <div className="card-header" style={{backgroundColor: '#808080'}}>
                <h3>N'ont pas encore répondu : </h3>
            </div>
            {listInvitation.map((inv, index) =>
                !inv.asBeenAnswered ?
                    <div key={index} className="card m-1" style={{backgroundColor: '#C0C0C0'}}>
                        <div className="container row border border-2 p-2 ">
                            <h6 className="card-title">
                                Nom : {inv.firstNameOfWantedUser} {inv.lastNameOfWantedUser}
                                Email : {inv.emailWantedUser}</h6>
                        </div>
                    </div> : null
            )}

        </div>
    );
}

export default ShowInvitationSectionPige;
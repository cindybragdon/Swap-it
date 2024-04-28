import React from "react";
import {useNavigate} from "react-router-dom";

const ShowUserPigeSectionPige = (props) => {


    const selectedUserPige = props.selectedUserPige;
    const listUserPige = props.listUserPige;
    const navigate = useNavigate();

    const onClickToWishlist = (userPige) => {
        navigate(`/piges/${selectedUserPige.pige.pigeName}/myWishList`, {state: userPige});
    }

    const onClickEmailUserPige = (userPige) => {
        // ecrire un email a userPige
    }

    const onClickEmailPickerUserPige = (userPige) => {
    // ecrire un email a userPige.userPigeWhoPickedTheOtherUserPige
    }

    return (
        <div className="border border-2  mt-3 ">
            <div className="card-header" style={{backgroundColor: '#1C67A1'}}>
                <h3>Seront présents : </h3>
            </div>
            {listUserPige.map((userPige, index) =>
                <div className="card " key={index}>

                    <div className="container col border border-2 p-2 ">
                        {userPige.userPigeImage ?
                            <div className="row justify-content-center">

                                <img className="imgUserPige" src={userPige.userPigeImage} alt="User Pige "/>
                            </div>
                            : null}
                        <div className="row">
                            <h6 className="card-title">Nom
                                : {userPige.user.userFirstName} {userPige.user.userLastName} </h6>
                            {userPige.userPigePseudo ?
                                <h6>Pseudo : {userPige.userPigePseudo}</h6> : null}
                            <button className="liste p-2 rounded mb-2 " style={{
                                backgroundColor: '#67A600',
                                color: 'white',
                                width: '400px',
                                margin: 'auto',
                                display: 'block'
                            }} onClick={() => onClickToWishlist(userPige)}> Liste de souhaits
                                de {userPige.user.userFirstName}</button>
                        </div>
                        <div className="" style={{display: "flex", gap: "10px", justifyContent: "center"}}>
                            <button className="list p-2 rounded" onClick={() => onClickEmailUserPige(userPige)}
                                    style={{backgroundColor: '#34D1D8', color: 'white', fontFamily: "Reddit Mono"}}>
                                <i className="bi bi-envelope-heart-fill"> Écrire à {userPige.user.userFirstName}</i>
                            </button>
                            <button className="list p-2 rounded" onClick={() => onClickEmailPickerUserPige(userPige)}
                                    style={{backgroundColor: '#34D1D8', color: 'white', fontFamily: "Reddit Mono"}}>
                                <i className="bi bi-envelope-heart-fill"> Écrire au participant qui a
                                    pigé {userPige.user.userFirstName}</i>
                            </button>
                        </div>


                    </div>
                </div>
            )}
        </div>
    );
}

export default ShowUserPigeSectionPige;
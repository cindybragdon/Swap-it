import React from "react";
import {useNavigate} from "react-router-dom";

const EveryoneSectionPige = (props) => {

    const selectedUserPige = props.selectedUserPige;
    const navigate = useNavigate();

    const onClickSeePersonPicked = () => {
        navigate(`/pige/picked`);
    }

    const onClickUpdatePseudoAndImage = () => {
        navigate(`/piges/${selectedUserPige.pige.pigeName}/UpdatePseudoImage`, {state:selectedUserPige});
    }


    const onClickSeeWishlist = () => {
        navigate(`/piges/${selectedUserPige.pige.pigeName}/myWishList`, {state: selectedUserPige});
    }

    const onClickBackToPiges = () => {
        navigate(`/piges/`);
    }
    return (
        <div className=" d-flex border flex-column  border-2 p-3 mt-3 text-start">
            <h5>Espace de {selectedUserPige.user.userFirstName}</h5>
            {/*Bien vefifier les navigate des boutons... ya 2 sortes et je pense que cest important pour le current user*/}
            <div className="mt-2 ">
                <button className="liste p-2 rounded"
                        style={{backgroundColor: '#1C67A1', color: 'white'}}
                        onClick={() => onClickSeeWishlist()}> Ma liste de souhaits pour cette
                    pige!
                </button>
            </div>
            <div className="mt-2 ">
                <button className="liste p-2 rounded"
                        style={{backgroundColor: '#1C67A1', color: 'white'}}
                        onClick={() => onClickSeePersonPicked()}> Voir qui j'ai pigé!
                </button>
            </div>
            <div className="mt-2">
                <button className="liste p-2 rounded"
                        style={{backgroundColor: '#1C67A1', color: 'white'}}
                        onClick={() => onClickBackToPiges()}> Voir toutes mes Piges
                </button>
            </div>
            <div className="mt-2">
                <button className="liste p-2 rounded"
                        style={{backgroundColor: '#1C67A1', color: 'white'}}
                        onClick={onClickUpdatePseudoAndImage}> Changer mon pseudo ou mon image pour la
                    pige {selectedUserPige.pige.pigeName}
                </button>

            </div>
        </div>
    );
}
export default EveryoneSectionPige;
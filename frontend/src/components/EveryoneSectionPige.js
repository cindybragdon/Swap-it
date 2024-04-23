import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const EveryoneSectionPige = (props) => {

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}${month}${day}`;
    let [endTime, setEndTime] = useState(new Date());


    const selectedUserPige = props.selectedUserPige;
    const navigate = useNavigate();
    const [personPicked, setPersonPicked] = useState([]);

    useEffect(() => {
        const urlGetWhoThePersonPicked = `http://localhost:9281/api/getWhoAsBeenPickedByIdUserPige?idUserPige=${selectedUserPige.idUserPige}`;
        axios.get(urlGetWhoThePersonPicked)
            .then(response => {
                setPersonPicked(response.data)
                let temp = selectedUserPige.pige.pigeEndDate.split("-");
                let endDate = new Date(parseInt(temp[0]),parseInt(temp[1])-1,parseInt(temp[2]));
                setEndTime(endDate)
            })
            .catch(err => console.log(err));

    }, [selectedUserPige.idUserPige]);


    const onClickSeePersonPicked = () => {
        if (selectedUserPige.pige.pigeState !== "CREATED" ) {
            navigate(`/pige/picked`, {state: personPicked});
        }
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
            <h4>Espace de {selectedUserPige.user.userFirstName}</h4>
            <div className="mt-2 ">
                <button className="liste p-2 rounded" id="btnMaListe"
                        style={{backgroundColor: '#1C67A1', color: 'white'}}
                        onClick={() => onClickSeeWishlist()}> Ma liste de souhaits pour cette
                    pige!
                </button>
            </div>
            {selectedUserPige.pige.pigeState !== "CREATED" ?
            <div className="mt-2 ">
                <button className="liste p-2 rounded" id="btnQuiPige"
                        style={{backgroundColor: '#1C67A1', color: 'white'}}
                        onClick={() => onClickSeePersonPicked()}> Voir qui j'ai pigé!
                </button>
            </div> : null
            }
            <div className="mt-2">
                <button className="liste p-2 rounded" id="voirPiges"
                        style={{backgroundColor: '#1C67A1', color: 'white'}}
                        onClick={() => onClickBackToPiges()}
                        disabled={(date.getMilliseconds() > endTime.getMilliseconds())}
                    > Voir toutes mes Piges
                </button>
            </div>
            <div className="mt-2">
                <button className="liste p-2 rounded" id="changerPseudo"
                        style={{backgroundColor: '#1C67A1', color: 'white'}}
                        onClick={onClickUpdatePseudoAndImage}> Changer mon pseudo ou mon image pour la
                    pige {selectedUserPige.pige.pigeName}
                </button>

            </div>
        </div>
    );
}
export default EveryoneSectionPige;
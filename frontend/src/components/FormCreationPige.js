import React, {useState} from "react";
import http from "../http/http";
import {useNavigate} from "react-router-dom";
import {createPige} from "../axi/AxiPost";

const FormCreationPige = () => {

    const [nomPige, setNomPige] = useState('');
    const [pigeDescription, setPigeDescription] = useState('');
    const [pigeAmount, setPigeAmount] = useState('');
    const [pigeEndDate, setPigeEndDate] = useState('');
    const [pigeType, setPigeType] = useState('');

    const formsUserWithPige = {
        user:{
            idUser: JSON.parse(sessionStorage.user).idUser
        },
        pige:{
            pigeName: nomPige,
            pigeType: pigeType,
            pigeDescription: pigeDescription,
            pigeSuggestedMoneyAmount: Number(pigeAmount),
            pigeEndDate: pigeEndDate
        }
    }
    const navigate = useNavigate();

    const onSubmit = () => {
        let response = createPige(formsUserWithPige);
        if (response) {
            navigate('/addPeople');
        }
    }







    return (
        <form className='container' method="post" onSubmit={onSubmit}>
            <h2 className="title-createpige">Créer une pige, on met tous les noms dans le chapeau!</h2>
            <div className="mb-2">
                <label className="form-label" style={{color: 'black'}}><h5>Nom de la pige</h5></label>
                <div className="mb-2" style={{display: 'flex'}}>
                    <input type="text" value={nomPige} onChange={e => setNomPige(e.target.value)}
                           className="form-control" placeholder="Nom de la pige" required style={{width: '50%'}}/>
                </div>
            </div>

            <div className="mb-2">
                <label className="form-label" style={{color: 'black'}}><h5>Description</h5></label>
                <div className="mb-2" style={{display: 'flex' }}>
                    <textarea className="form-control" style={{width: '50%'}} value={pigeDescription}
                              onChange={e => setPigeDescription(e.target.value)} rows="3" required></textarea>
                </div>
            </div>


            <div className="mb-3">
                <label className="form-label" style={{color: 'black'}}><h5>Type de pige</h5></label>
                <div className="form-check" style={{color: 'black'}}>
                    <input className="form-check-input" name="pigeType" type="radio" value={pigeType}
                           onChange={e => setPigeType("NORMAL")} id="condition1" required/>
                    <label className="form-check-label">Échange de cadeaux (échange surprise ex : Noël,
                        bureau...)</label>
                </div>
                <div className="form-check" style={{color: 'black'}}>
                    <input className="form-check-input" name="pigeType" type="radio" value={pigeType}
                           onChange={e => setPigeType("THEMED")} id="condition2"/>
                    <label className="form-check-label">Liste de cadeaux pour événements (liste pour babyshower,
                        mariage...)</label>
                </div>

            </div>

            <div className="mb-3" style={{color: 'black'}}>
                <label className="form-label"><h5>Montant de la pige</h5></label>
                <div className="mb-2" style={{display: 'flex'}}>
                    <input type="number" min="0" value={pigeAmount} onChange={e => setPigeAmount(e.target.value)}
                           className="form-control" placeholder="Montant de la pige" style={{width: '25%'}}/>
                </div>
            </div>

            <div className="mb-3" style={{color: 'black'}}>
                <label className="form-label"><h5>Date l'évènement</h5></label>
                <div className="mb-2" style={{display: 'flex'}}>
                    <input type="date" className="form-control" value={pigeEndDate}
                           onChange={e => setPigeEndDate(e.target.value)} required style={{width: '33%'}}/>
                </div>
            </div>


            <p className="fst-italic" style={{color: 'black'}}>La pige ne sera lancée que plus tard</p>
            <button type="submit" className="btn " style={{width: '33%', backgroundColor: '#D4025B'}}>Créer la
                pige!
            </button>
        </form>
    )
}

export default FormCreationPige;
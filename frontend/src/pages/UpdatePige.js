import React, { useState } from "react";
import ImagePigeCreate from "../images/Chapeau.jpg";
import { useForm } from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import { createPige } from "../axi/AxiPost";

const UpdatePige = () => {
    var sectionStyle = {
        backgroundImage: `url(${ImagePigeCreate})`,
        width: '50vw',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    const location = useLocation();
    const selectedUserPige = location.state;
    console.log(selectedUserPige);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [nomPige, setNomPige] = useState('');
    const [pigeDescription, setPigeDescription] = useState('');
    const [pigeAmount, setPigeAmount] = useState('');
    const [pigeEndDate, setPigeEndDate] = useState('');
    const [pigeType, setPigeType] = useState('');
    const navigate = useNavigate();

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

    const onSubmit = () => {
        let response = createPige(formsUserWithPige);
        if (response) {
            navigate('/addPeople');
        }
    }

    return (
        <div className="bg-white " style={{ marginBottom: '0.5rem', textColor: 'black' }}>
            <form className='container' method="post" onSubmit={onSubmit}>
                <h2 className="title-createpige">Modifier la pige {nomPige}</h2>
                <div className="mb-2">
                    <label className="form-label" style={{color: 'black'}}><h5>Nom de la pige</h5></label>
                    <div className="mb-2" style={{display: 'flex', justifyContent: 'center'}}>
                        <input type="text" value={nomPige} onChange={e => setNomPige(e.target.value)}
                               className="form-control" placeholder="Nom de la pige" required style={{width: '50%'}}/>
                    </div>
                </div>
                <div className="mb-2">
                    <label className="form-label" style={{color: 'black'}}><h5>Description</h5></label>
                    <div className="mb-2" style={{display: 'flex', justifyContent: 'center'}}>
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
                    <div className="mb-2" style={{display: 'flex', justifyContent: 'center'}}>
                        <input type="number" min="0" value={pigeAmount} onChange={e => setPigeAmount(e.target.value)}
                               className="form-control" placeholder="Montant de la pige" style={{width: '25%'}}/>
                    </div>
                </div>

                <div className="mb-3" style={{color: 'black'}}>
                    <label className="form-label"><h5>Date l'évènement</h5></label>
                    <div className="mb-2" style={{display: 'flex', justifyContent: 'center'}}>
                        <input type="date" className="form-control" value={pigeEndDate}
                               onChange={e => setPigeEndDate(e.target.value)} required style={{width: '33%'}}/>
                    </div>
                </div>


                <button type="submit" className="btn " style={{width: '33%', backgroundColor: '#D4025B'}}>Modifier la pige!</button>
            </form>
        </div>
    );
}

export default UpdatePige;
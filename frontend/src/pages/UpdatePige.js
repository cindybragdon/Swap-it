import React, {useState} from "react";
import ImagePigeCreate from "../images/createAccountBG.jpg";
import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import {updatePige} from "../axi/AxiPut";

const UpdatePige = () => {
    var sectionStyle = {
        backgroundImage: `url(${ImagePigeCreate})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '85vh',
    }

    const navigate = useNavigate();

    const location = useLocation();
    const selectedUserPige = location.state;

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const [nomPige, setNomPige] = useState(selectedUserPige.pige.pigeName);
    const [pigeDescription, setPigeDescription] = useState(selectedUserPige.pige.pigeDescription);
    const [pigeAmount, setPigeAmount] = useState(selectedUserPige.pige.pigeSuggestedMoneyAmount);
    const [pigeEndDate, setPigeEndDate] = useState(selectedUserPige.pige.pigeEndDate);
    const [pigeType, setPigeType] = useState(selectedUserPige.pige.pigeType);


    const formsPige = {
        idPige: selectedUserPige.pige.idPige,
        pigeName: nomPige,
        pigeType: pigeType,
        pigeDescription: pigeDescription,
        pigeSuggestedMoneyAmount: pigeAmount,
        pigeEndDate: pigeEndDate

    }

    const onSubmit = () => {
        let response = updatePige(formsPige);
        if (response) {
            navigate('/piges');
        }
    }

    return (
        <div style={sectionStyle}>
            <div className="card " id="container-pige-creation">
                <form className='container' method="post" onSubmit={onSubmit}>
                    <h2 className="card-header title-createpige ">Modifier la pige {nomPige}</h2>
                    <div className="mb-2">
                        <label className="form-label" style={{color: 'black'}}><h5>Nom de la pige</h5></label>
                        <div className="mb-2" style={{display: 'flex'}}>
                            <input type="text" value={nomPige} onChange={e => setNomPige(e.target.value)}
                                   className="form-control m-2" placeholder="Nom de la pige" required
                                   style={{width: '50%'}}
                                   maxLength="25"/>

                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="form-label" style={{color: 'black'}}><h5>Description</h5></label>
                        <div className="mb-2" style={{display: 'flex'}}>
                    <textarea className="form-control" style={{width: '40%'}} value={pigeDescription}
                              maxLength="255"
                              onChange={e => setPigeDescription(e.target.value)} rows="3" required></textarea>
                        </div>
                    </div>


                    <div className="mb-2">
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
                            <input type="number" min="0" value={pigeAmount}
                                   onChange={e => setPigeAmount(e.target.value)}
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


                    <button type="submit" className="btn " style={{width: '33%', backgroundColor: '#D4025B'}}>Modifier
                        la pige!
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UpdatePige;
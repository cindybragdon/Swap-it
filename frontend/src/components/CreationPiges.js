import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import http from "../http/http";



const CreationPiges = () => {



    const {handleSubmit, reset} = useForm();

    const navigate = useNavigate();

    //Ajout useState, pas terminé
    //UPDATE : useState terminé
    const [nomPige, setNomPige] = useState('');
    const [pigeDescription, setPigeDescription] = useState('');
    const [pigeAmount, setPigeAmount] = useState('');
    const [pigeEndDate, setPigeEndDate] = useState('');
    const [pigeType, setPigeType] = useState('');


    const [email, setEmail] = useState('');
    const [listUserEmail, setListUserEmail] = useState([]);




    const formsUserWithPige = {
        user:{
            idUser: 1
        },
        pige:{
            pigeName: nomPige,
            pigeType: pigeType,
            pigeDescription: pigeDescription,
            pigeSuggestedMoneyAmount: Number(pigeAmount),
            pigeEndDate: pigeEndDate
        }
    }



    const pigesPost = async () => {

        try {
            const response = await http.post(`/createUserPigeWithPige`, formsUserWithPige)
                .then(response => {
                    console.log(response.data);
                    if (response.statusText === "ACK-301") {
                        throw new Error("Erreur lors de la création de la pige");
                    }
                })
        } catch (error) {
            console.error(error);
        } finally {
            setNomPige('');
            setPigeDescription('');
            setPigeType('');
            setPigeAmount('');
            setPigeEndDate('');
            alert('Pige créée');
            navigate('/piges')
        }
    }


    const onSubmit = (data) => {
        pigesPost().then(r => console.log(r));
        console.log(data);
        reset();
    }



    return (

        <div className="renderingElement oui bg-dark">
            <form className='container' method="post" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="texte-title">Salut</h1>
                <br/><br/>
                <div className="mb-3">
                    <label className="form-label">Nom de la pige</label>
                    <input type="text" value={nomPige}  onChange={e => setNomPige(e.target.value)} className="form-control" placeholder="Nom de la pige" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" value={pigeDescription} onChange={e => setPigeDescription(e.target.value)} rows="3" required></textarea>
                </div>


                <div className="mb-3">
                    <label className="form-label">Type de pige</label>
                    <div className="form-check">
                        <input className="form-check-input" name="pigeType" type="radio" value={pigeType} onChange={e => setPigeType("NORMAL")} id="condition1" required/>
                        <label className="form-check-label">Échange de cadeaux</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="pigeType" type="radio" value={pigeType} onChange={e => setPigeType("THEMED")} id="condition2"/>
                        <label className="form-check-label">Liste de cadeaux pour événements</label>
                    </div>

                </div>

                <div className="mb-3">
                    <label className="form-label">Montant de la pige</label>
                    <input type="number" min="0" value={pigeAmount} onChange={e => setPigeAmount(e.target.value)} className="form-control" placeholder="Montant de la pige"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Date de fin de la pige</label>
                    <input type="date" className="form-control" value={pigeEndDate} onChange={e => setPigeEndDate(e.target.value)} required/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div>
                <label className="form-label">Date de fin de la pige</label>

            </div>
        </div>

    );
}

export default CreationPiges;

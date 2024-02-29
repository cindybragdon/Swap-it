import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import http from "../http/http";

//Problème de CSS

const CreationPiges = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    //Ajout useState, pas terminé
    //UPDATE : useState terminé
    const [nomPige, setNomPige] = useState('');
    const [pigeDescription, setPigeDescription] = useState('');
    const [pigeAmount, setPigeAmount] = useState(0);
    const [pigeEndDate, setPigeEndDate] = useState('');
    const [pigeType, setPigeType] = useState('');

    const [serverResponse, setServerResponse] = useState(null); // [0] = email, [1] = password, [2] = serverResponse


    //Problème avec le id de la pige, pour le moment on  doit le set nous même, mais normalement on veut qu'il s'incrémente automatiquement
    const formsPige = {
        idPige: 3,
        pigeName: nomPige,
        pigeType: pigeType,
        pigeDescription: pigeDescription,
        pigeAmount: pigeAmount,
        pigeEndDate: pigeEndDate,
        pigeState: "CREATED"
    }






    const pigesPost = async () => {
        try {
            const response = await http.post(`/createPige`, formsPige)
                .then(response => {
                    console.log(response.data);
                    if (response){
                        setServerResponse(response.data);
                    }
                })

        } catch (error) {
            console.error(error);
        } finally {
            setNomPige('');
            setPigeDescription('');
            setPigeType('');
            setPigeAmount(0);
            setPigeEndDate('');
            alert('Pige créée');
        }
    }


    const onSubmit = (data) => {

        pigesPost();
        console.log(data);
        reset();
    }

    return (

        <div className="hero oui">
            <form className='container' onSubmit={handleSubmit(onSubmit)}>
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
                        <input className="form-check-input" name="pigeType" type="radio" value={pigeType} onChange={e => setPigeType("Normal")} id="condition1" required/>
                        <label className="form-check-label">Normal</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="pigeType" type="radio" value={pigeType} onChange={e => setPigeType("Thématique")} id="condition2"/>
                        <label className="form-check-label">Thématique</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="pigeType" type="radio" value={pigeType} onChange={e => setPigeType("Liste commune")} id="condition3"/>
                        <label className="form-check-label">Liste commune</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Montant de la pige</label>
                    <input type="number" min="0" value={pigeAmount} onChange={e => setPigeAmount(Number(e.target.value))} className="form-control" placeholder="Montant de la pige"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Date de fin de la pige</label>
                    <input type="date" className="form-control" value={pigeEndDate} onChange={e => setPigeEndDate(e.target.value)} required/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CreationPiges


/**
 * <div className="mb-3">
 *                     <label className="form-label">Conditions de pige</label>
 *                     <div className="form-check">
 *                         <input className="form-check-input" type="checkbox" value="" id="condition1"/>
 *                         <label className="form-check-label">Guess who</label>
 *                     </div>
 *                     <div className="form-check">
 *                         <input className="form-check-input" type="checkbox" value="" id="condition2"/>
 *                         <label className="form-check-label">Voleur de cadeaux</label>
 *                     </div>
 *                     <div className="form-check">
 *                         <input className="form-check-input" type="checkbox" value="" id="condition3"/>
 *                         <label className="form-check-label">Réattribution en cas de départ</label>
 *                     </div>
 *                 </div>
 */
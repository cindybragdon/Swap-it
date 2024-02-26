import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import http from "../http/http";

//Problème de CSS

const CreationPiges = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    //Ajout useState, pas terminé
    const [nomPige, setNomPige] = useState('');
    const [pigeDescription, setPigeDescription] = useState('');
    const [pigAmmount, setPigeAmmount] = useState(0);
    const [pigeEndDate, setPigeEndDate] = useState('');
    const [pigeType, setPigeType] = useState('');
    const [pigeTimeStamp, setPigeTimeStamp] = useState('');

    const [serverResponse, setServerResponse] = useState(null); // [0] = email, [1] = password, [2] = serverResponse


    const testPige = {
        idPige: 6,
        pigeName: nomPige,
        pigeType: "Normal",
        pigeDescription: "description"

    }

    const pigesPost = async () => {
        try {
            const response = await http.post(`/createPige`, testPige)
                .then(response => {
                    console.log(response.data);
                })
            setServerResponse(response.data);
            console.log(serverResponse)
        } catch (error) {
            console.error(error);
        } finally {
            setNomPige('');
            alert('Pige créée');
        }
    }

    const onSubmit = (data) => {
        pigesPost();
        console.log(data);
        reset();
    }

    return (

        <div className="hero">
            <form className='container' onSubmit={handleSubmit(onSubmit)}>
                <h1 className="texte-title">Salut</h1>
                <div className="mb-3">
                    <label className="form-label">Nom de la pige</label>
                    <input type="text" value={nomPige} className="form-control" placeholder="name@example.com"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Conditions de pige</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="condition1"/>
                        <label className="form-check-label">Guess who</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="condition2"/>
                        <label className="form-check-label">Voleur de cadeaux</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="condition3"/>
                        <label className="form-check-label">Réattribution en cas de départ</label>
                    </div>
                </div>


                <div className="mb-3">
                    <label className="form-label">Conditions de pige</label>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label">Guess who</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                        <label className="form-check-label">Voleur de cadeaux</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled"/>
                        <label className="form-check-label">Réattribution en cas de départ</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Date de pige</label>
                    <input type="date" className="form-control" placeholder=""/>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CreationPiges

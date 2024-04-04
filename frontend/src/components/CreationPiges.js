import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import http from "../http/http";
import ImagePigeCreate from "../images/Chapeau.jpg"
import ImageLapin from "../images/Lapin.jpg";
import ImageChapeauLapin from "../images/ChapeauLapins.jpg";



const CreationPiges = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImagePigeCreate})`,
        width: '50vw',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

    }

    const {handleSubmit, reset} = useForm();

    const navigate = useNavigate();

    const [nomPige, setNomPige] = useState('');
    const [pigeDescription, setPigeDescription] = useState('');
    const [pigeAmount, setPigeAmount] = useState('');
    const [pigeEndDate, setPigeEndDate] = useState('');
    const [pigeType, setPigeType] = useState('');


    const [email, setEmail] = useState('');
    const [listUserEmail, setListUserEmail] = useState([]);


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
            navigate('/piges')
        }
    }


    const onSubmit = (data) => {
        pigesPost().then(r => console.log(r));
        console.log(data);
        reset();
    }

    return (

        <div className="bg-white " style={{ marginBottom: '0.5rem', textColor:'black' }}>
            <form className='container' method="post" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="title-createpige">Créer une pige, on met tous les noms dans le chapeau!</h2>
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

                <div className="d-flex justify-content-around">
                    <div className="container mb-4 p-3 d-flex">
                        <div className="card text-center " id="container-forgot">
                            <div className="card-header h5 text-white bg-info">On ajoute des participants au chapeau!
                            </div>
                            <div className="card-body ">
                                <button className="btn btn-secondary d-flex justify-content-center"
                                        style={{margin: "auto"}}>
                                    <img src={ImageLapin} height="220" width="250" alt="Account"/>
                                </button>
                                <div className="form-outline">
                                    <input type="email" id="typeEmailX" className="form-control my-3"
                                           placeholder="Prénom"/>
                                    <div className="form-outline">
                                        <input type="email" id="typeEmailY" className="form-control my-3"
                                               placeholder="Nom"/>
                                    </div>
                                </div>


                                <div className="form-outline">
                                    <input type="email" id="typeEmailZ" className="form-control my-3"
                                           placeholder="Courriel du participant"/>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-20 text-center">
                                        <button type="submit" className="btn btn-info w-30">Et hop, un de plus!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mb-4 p-3 d-flex">
                        <div className="card text-center d-flex flex-column" style={{height: "100%"}}
                             id="container-forgot">
                            <div className="card-header h5 text-white bg-info">Ils sont tous là?</div>
                            <div className="card-body d-flex flex-column" style={{flex: "1"}}>
                                <div className="form-outline">
                                    <p>Prénom du participant</p>
                                    <div className="form-outline">
                                        <p>Nom de famille du participant 1</p>
                                    </div>
                                </div>
                                <div className="form-outline">
                                    <p>Courriel du participant 1</p>
                                </div>
                                <button className="btn btn-secondary d-flex justify-content-center mt-auto"
                                        style={{width: "100%", margin: "auto"}}>
                                    <img src={ImageChapeauLapin} height="220" width="250" alt="Account"/>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>


                <p className="fst-italic" style={{color: 'black'}}>La pige ne sera lancée que plus tard</p>
                <button type="submit" className="btn " style={{width: '33%', backgroundColor: '#D4025B'}}>Créer la
                    pige!
                </button>
            </form>
            <div className="col-sm">
                <div className='card justify-content-center min-vh-100' style={sectionStyle}>
                </div>
            </div>

        </div>

    );
}

export default CreationPiges;

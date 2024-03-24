import React from 'react';
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import BackToTopButton from "../components/BackToTopButton";


function Piges() {

    /*
    * @KarolannMauger
    * @Date : 2024-03-21
    * @Revision1 :
    * Cela est pas urgent.
    * Doit mettre le key dans le map, mais j'arrive pas a get le id de la Pige,
    * donc soit on trouve une façon de comment get le id de la pige ou soit on créer une petite fonction qui génére un id.
     */

    const navigate = useNavigate();

    const [pigesT, setPiges] = useState([]);
    const [idUser, setUserId] = useState(1);

    const [selectedPige, setSelectedPige] = useState(null);



    useEffect(() => {
        fetch(`http://localhost:9281/api/getListUserPigeFromIdUser?idUser=${idUser}`)
            .then(response => response.json())
            .then(data => setPiges(data))
            .catch(error => console.error(error))
    }, [idUser]);



    const handleClick = () => {
        navigate('/piges/creation-piges');
        alert('Button clicked');
        console.log('Button clicked')
    }

    const handlePigeClick = (pige) => {
        setSelectedPige(pige);
        navigate(`/piges/${pige.pige.pigeName}`, {state: {selectedPige: pige} });
        console.log(pige);
    }
    return (
        <div className='renderingElement oui'>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card" onClick={handleClick} >
                            <div className="card-body" >
                                <h5 className="card-title">Créer une nouvelle pige</h5>
                                <p className="card-text"><i className="bi bi-plus-lg"></i></p>
                            </div>
                    </div>
                </div>


                {pigesT.map(pige => (
                    <div className="col" onClick={() => handlePigeClick(pige)}>
                        <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{pige.pige.pigeName}</h5>
                                    <p className="card-text">{pige.pige.pigeEndDate}</p>
                                </div>
                        </div>
                    </div>
                ))}
                {console.log(pigesT)}

            </div>
            <BackToTopButton />
        </div>
    );
}

export default Piges;
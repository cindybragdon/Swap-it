import React from 'react';
import {useNavigate} from "react-router-dom";


function Piges() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/piges/creation-piges');
        alert('Button clicked');
        console.log('Button clicked')
    }
    return (
        <div className='hero oui'>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card" onClick={handleClick} >
                            <div className="card-body" >
                                <h5 className="card-title">Créer une nouvelle pige</h5>
                                <p className="card-text"><i className="bi bi-plus-lg"></i></p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">

                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">

                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Piges;
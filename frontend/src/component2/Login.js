/*import React, { useState } from 'react';

const Login = () => {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');

    const submitForm = (event) => {
        event.preventDefault();
        if (nom === '' || prenom === '' || email === '') {
            console.log("testproblem");
        }
        else{
            localStorage.setItem('nom', nom);
            localStorage.setItem('prenom', prenom);
            localStorage.setItem('email', email);

            alert('Form send');
        }
    }

    var myValue = localStorage.getItem('nom');
    console.log(myValue);

    return (
        <>
          


            <form action="">

                <label className="form-label">Nom</label>
                <input type="text"
                    required
                    onChange={e => setNom(e.target.value)}
                    value={nom} />

                <label className="form-label">Prénom</label>
                <input type="text"
                    required
                    onChange={e => setPrenom(e.target.value)}
                    value={prenom} />

                <label className="form-label">Email</label>
                <input type="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    value={email} />

                <button type="button"
                    className="btn btn-primary mt-3"
                    onClick={submitForm}>
                    Form send
                </button>
            </form>
        </>
    );
};

export default Login;
*/

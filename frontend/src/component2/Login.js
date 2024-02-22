import React, { useState } from 'react';

const Login = () => {

    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');

    /*
    const submitForm = (event) => {
        event.preventDefault();
        if (email === '') {
            console.log("testproblem");
        }
        else{
            localStorage.setItem('email', email);

            alert('Form send');
        }
    }
    */

    return (
        <>
            <form action="">
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="form-group row">
                        <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="form-group row">
                        <input type="password" className="form-control" placeholder="Password" required />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Login;


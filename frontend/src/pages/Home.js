import React from 'react';
import Login from "../components/Login";


function Home() {
  return (
    <div className='renderingElement oui'>
        <div className='container'>
            <h1>Page Home</h1>
            <p> Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="col-sm-6">
            <div className="card ">
                <div className="card-body">
                    <Login />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;

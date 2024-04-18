import React from 'react';


const ModalPseudo = () => {

    return(

        <div className="modal fade" id="staticBackdrop1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div className="modal-dialog d-flex justify-content-center">
                <div className="modal-content w-75">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel1">Sign in</h5>
                        <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn-close"
                                data-mdb-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-4">
                        <form>


                            <div data-mdb-input-init="" className="form-outline mb-4">
                                <input type="email" id="email1" className="form-control"/>
                                <label className="form-label" form="email1">Pseudo</label>
                            </div>



                            <button type="submit" data-mdb-button-init="" data-mdb-ripple-init=""
                                    className="btn btn-primary btn-block">Sauvegarder
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
);
};

export default ModalPseudo;
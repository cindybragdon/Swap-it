import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useLocation, useNavigate} from "react-router-dom";
import http from "../http/http";
import ImageAddWish from "../images/Thinking.jpg";




const AddWish = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageAddWish})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minWidth: '100vw'
    }



    const location = useLocation();

    const [selectedUserPige, setSelectedUserPige] = useState(location.state);
    const [wishedItemName, setWishedItemName] = useState('');
    const [wishedItemDescription, setItemDescription] = useState('');
    const [wishedItemUrl, setItemUrl] = useState('');
    const [wishedItemImage, setWishedItemImage] = useState('');

    const msgErrors = {

        wishedItemName: {
            requis: "Vous devez saisir un nom"
        },
        wishedItemDescription: {
            requis: "Vous devez saisir une description"
        },

    }
    const formsWishedItem = {
        userPige : selectedUserPige,
        wishedItemName: wishedItemName,
        wishedItemDescription: wishedItemDescription,
        wishedItemUrl: wishedItemUrl,
        wishedItemImage :wishedItemImage
    }

    const addWishedItemPost = async () => {
        try {
            const url = `http://localhost:9281/api/createWishedItem`;
            const response = await http.post(url, formsWishedItem)
                .then(response => {
                    console.log(response.data);
                    console.log(formsWishedItem);
                    if (response.statusText === "ACK-901") {
                        throw new Error("Erreur lors de la création de la suggestion");
                    }
                })
        } catch (error) {
            console.error(error);
        } finally {
            setWishedItemName('');
            setItemDescription('');
            setItemUrl('');
            setSelectedUserPige('')
            setWishedItemImage('')
        }
    }

    const onSubmit = (data) => {
        addWishedItemPost().then(r => console.log(r));
        console.log(data);
    }

    return (
        <div className='container-fluid row justify-content-center text-center oui min-vh-100 ' style={sectionStyle}>
            <div className="col-sm-5">
                <div className="card p-2 mt-5 border border-black" style={{backgroundColor: '#88CFED'}}>
                    <div className="card-header " style={{backgroundColor: '#012C57'}}>
                        <h3 className= "text header " style={{color: 'white'}} >Ajouter une suggestion</h3>
                    </div>
                    <form className='container' onSubmit={onSubmit}>


                        <div className="mb-2">
                            <div>
                            <label>Nom Item</label>
                            </div>
                            <input type="nom" id="typeNom" className="col-sm-6" placeholder={"Nom Item"}
                                   onChange={event => setWishedItemName(event.target.value)} required/>

                            {msgErrors.wishedItemName && msgErrors.wishedItemName.message}
                        </div>
                        <div className="mb-2">
                            <div>
                            <label>Description</label>
                            </div>
                            <textarea rows="3" placeholder={"Entrez la description ici"} className="col-sm-6"
                                      onChange={event => setItemDescription(event.target.value)} required/>
                            {msgErrors.message && msgErrors.wishedItemDescription.message}
                        </div>
                        <div className="mb-2">
                            <div>
                            <label>Voir cet item en ligne au : </label>
                            </div>
                            <input type="nom" placeholder={"Entrez un url ici"} className="col-sm-6"
                                   onChange={event => setItemUrl(event.target.value)}/>
                            {msgErrors.wishedItemName && msgErrors.wishedItemName.message}
                        </div>



                        <br/>
                        <button type="submit" className="btn " style={{backgroundColor:'#012C57', color: 'white'}} >Ajouter à la liste</button>
                    </form>
                </div>
            </div>

        </div>



    );
};

export default AddWish;

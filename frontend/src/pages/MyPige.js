import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import ImageBGWish from "../images/BGPiges2.jpg";
import BackToTopButton from "../components/BackToTopButton";
import axios from "axios";
import InfoPige from "../components/InfoPige";
import AdminSectionPige from "../components/AdminSectionPige";
import EveryoneSectionPige from "../components/EveryoneSectionPige";
import ShowUserPigeSectionPige from "../components/ShowUserPigeSectionPige";
import ShowInvitationSectionPige from "../components/ShowInvitationSectionPige";


const MyPige = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageBGWish})`,
        width: '100%',
        minHeight: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        fontFamily: "Reddit Mono",
        border: 'white solid 3px',
    }

    const currentDate = new Date();

    const location = useLocation();
    const selectedUserPige = location.state;

    const [listUserPige, setListIUserPige] = useState([]);
    const [listInvitation, setListInvitation] = useState([]);


    useEffect(() => {
        const urlGetListInvitation = `http://localhost:9281/api/getAllInvitationsFromUserId?idPige=${selectedUserPige.pige.idPige}`;
        axios.get(urlGetListInvitation)
            .then(res => setListInvitation(res.data))
            .catch(err => console.log(err));

    }, [selectedUserPige.pige.idPige]);



    useEffect(() => {
        const urlGetListUserPige = `http://localhost:9281/api/getListUserPigeFromIdPige?idPige=${selectedUserPige.pige.idPige}`;
        axios.get(urlGetListUserPige)
            .then(response => setListIUserPige(response.data))
            .catch(error => console.error(error))
    }, [selectedUserPige.pige.idPige]);


    return (
        <div className='container-fluid row justify-content-center text-center oui min-vh-100 '
             style={sectionStyle}>
            <div className="col-sm-8">
                <div className="card p-2 ">
                    <div className="card-header" style={{backgroundColor: '#1C67A1'}}>
                        <h3>Coucou! Voici les détails de la pige : </h3>
                        <h1>{selectedUserPige.pige.pigeName}</h1>
                    </div>
                    <div className="card-body">
                        <InfoPige selectedUserPige={selectedUserPige}/>
                        <AdminSectionPige selectedUserPige={selectedUserPige}  listUserPige={listUserPige} />
                        <EveryoneSectionPige selectedUserPige={selectedUserPige} />
                        <ShowUserPigeSectionPige selectedUserPige={selectedUserPige} listUserPige={listUserPige} />
                        <ShowInvitationSectionPige listInvitation={listInvitation} />
                    </div>
                </div>
                <BackToTopButton/>
            </div>
        </div>
    );
}

export default MyPige;

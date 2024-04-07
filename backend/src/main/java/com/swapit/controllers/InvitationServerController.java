package com.swapit.controllers;


import com.swapit.model.Invitations;
import com.swapit.model.Pige;
import com.swapit.model.User;
import com.swapit.repositories.InvitationsRepository;
import com.swapit.repositories.PigeRepository;
import com.swapit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")


public class InvitationServerController {

    @Autowired
    private InvitationsRepository invitationsRepository;

    @Autowired
    private PigeRepository pigeRepository;


    //Creates an invitation to be sended by email
    // (Verified and tested)
    @PostMapping("/createInvitation")
    public String createInvitation(@RequestBody List<String> listEmailsToSendInv, @RequestParam int idUser) throws Exception{
        String messageInvitation = "ACK-401";
        try{
            if (listEmailsToSendInv != null) {

                for(String email : listEmailsToSendInv) {
                    Invitations invitationsToCreate = new Invitations();
                    invitationsToCreate.setEmailWantedUser(email);
                    invitationsToCreate.setPige(pigeRepository.findPigeByNumberPigeOfUser(pigeRepository.countPigesByUserAdmin_IdUser(idUser)));
                    invitationsToCreate.setAsBeenAnswered(false);
                    invitationsRepository.save(invitationsToCreate);
                }
                messageInvitation = "ACK-400";
            }
        }catch (Exception e){
            return messageInvitation + e.getMessage();
        }
        return messageInvitation;

    }

}

package com.swapit.controllers;


import com.swapit.model.*;
import com.swapit.repositories.InvitationsRepository;
import com.swapit.repositories.PigeRepository;
import com.swapit.repositories.UserPigeRepository;
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

    @Autowired
    private UserPigeRepository userPigeRepository;





    //Creates an invitation to be sended by email
    // (Verified and tested)
    @PostMapping("/createInvitation")
    public String createInvitation(@RequestBody List<String> listEmailsToSendInv, @RequestParam int idPige) throws Exception{
        String messageInvitation = "ACK-401";
        try{
            if (listEmailsToSendInv != null) {

                for(String email : listEmailsToSendInv) {
                    Invitations invitationsToCreate = new Invitations();
                    invitationsToCreate.setEmailWantedUser(email);
                    invitationsToCreate.setPige(pigeRepository.findPigeByIdPige(idPige));
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

    @GetMapping("/getAllInvitationsFromUserEmail")
    public List<Invitations> getAllInvitationsFromUserEmail(@RequestParam String userEmail) throws Exception {
        try {
            return invitationsRepository.findAllByEmailWantedUser(userEmail);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @GetMapping("/getAllInvitationsFromUserId")
    public List<Invitations> getAllInvitationsFromUserId(@RequestParam int userId) throws Exception {
        try {
            return invitationsRepository.findAllByIdWantedUser(userId);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @PutMapping("/updateInv")
    public String updateInv(@RequestBody UserPige userPigeToCreate, @RequestParam int idInvToUpdate, @RequestParam boolean isAccepted) throws Exception{
        String messageInvitation = "ACK-401";
        try{
            if (idInvToUpdate > 0) {
                if (userPigeToCreate.getUser() != null && userPigeToCreate.getPige() != null) {
                    Invitations invitations = invitationsRepository.findByIdInvitation(idInvToUpdate);
                    invitations.setAsBeenAnswered(true);
                    invitationsRepository.save(invitations);
                    if (isAccepted) {
                        userPigeRepository.existsUserPigeByUser_IdUserAndPige_IdPige(userPigeToCreate.getUser().getIdUser(), userPigeToCreate.getPige().getIdPige());
                        userPigeRepository.save(userPigeToCreate);
                    }
                }
                messageInvitation = "ACK-400";
            }
        }catch (Exception e){
            return messageInvitation + e.getMessage();
        }
        return messageInvitation;

    }

}

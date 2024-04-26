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
    public String createInvitation(@RequestBody List<Invitations> listInvToCreate) throws Exception{
        String messageInvitation = "ACK-401";
        try{
            if (listInvToCreate != null) {

                invitationsRepository.saveAll(listInvToCreate);
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
    public List<Invitations> getAllInvitationsFromUserId(@RequestParam int idPige) throws Exception {
        try {
            return invitationsRepository.findAllByPige_IdPige(idPige);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @GetMapping("/getCountInvByEmailWantedUserAndAsBeenAnswered")
    public int getCountInvByEmailWantedUserAndAsBeenAnswered(@RequestParam String emailWantedUser, boolean asBeenAnswered) throws Exception {
        try {
            return invitationsRepository.countInvitationsByEmailWantedUser_AndAsBeenAnswered(emailWantedUser, asBeenAnswered);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return 0;
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
                        if(userPigeRepository.findUserPigeByUser_UserEmailAndPige_IdPige(invitations.getEmailWantedUser(), invitations.getPige().getIdPige()) == null) {
                            userPigeRepository.existsUserPigeByUser_IdUserAndPige_IdPige(userPigeToCreate.getUser().getIdUser(), userPigeToCreate.getPige().getIdPige());
                            userPigeRepository.save(userPigeToCreate);
                        }
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

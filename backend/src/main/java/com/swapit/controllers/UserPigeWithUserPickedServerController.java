package com.swapit.controllers;

import com.swapit.model.Invitations;
import com.swapit.model.UserPigeWithUserPicked;
import com.swapit.repositories.UserPigeRepository;
import com.swapit.repositories.UserPigeWithUserPickedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")
public class UserPigeWithUserPickedServerController {

    @Autowired
    private UserPigeWithUserPickedRepository userPigeWithUserPickedRepository;

    @PostMapping("/createUserPigeWithUserPicked")
    public String createInvitation(@RequestBody UserPigeWithUserPicked userPigeWithUserPickedToCreate) throws Exception{
        String messageCreate = "ACK-101";
        try {
            if (userPigeWithUserPickedToCreate.getUserPigeWhoPickedTheOtherUserPige() != null
            && userPigeWithUserPickedToCreate.getUserPigeWhoIsPickedByTheUserPige() != null) {
                userPigeWithUserPickedRepository.save(userPigeWithUserPickedToCreate);
                messageCreate = "ACK-100";
            }
            return messageCreate;
        } catch (Exception e) {
            return messageCreate + e.getMessage();
        }

    }
}

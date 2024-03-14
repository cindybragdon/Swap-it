package com.swapit.controllers;

import com.swapit.model.Couple;
import com.swapit.model.Invitations;
import com.swapit.model.UserPige;
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

    @Autowired
    private UserPigeRepository userPigeRepository;

    // (Verified and tested)
    @PostMapping("/createUserPigeWithUserPicked")
    public String createInvitation(@RequestBody UserPigeWithUserPicked userPigeWithUserPickedToCreate) throws Exception{
        String messageCreate = "ACK-101";
        try {
            if (userPigeWithUserPickedToCreate.getUserPigeWhoPickedTheOtherUserPige() != null
            && userPigeWithUserPickedToCreate.getUserPigeWhoIsPickedByTheUserPige() != null) {
                UserPige testFirstUserPicked = userPigeRepository.findByIdUserPige(userPigeWithUserPickedToCreate.getUserPigeWhoPickedTheOtherUserPige().getIdUserPige());
                UserPige testSecondUserPicked = userPigeRepository.findByIdUserPige(userPigeWithUserPickedToCreate.getUserPigeWhoIsPickedByTheUserPige().getIdUserPige());

                if (testFirstUserPicked.getPige().equals(testSecondUserPicked.getPige())) {
                    if (!userPigeWithUserPickedToCreate.getUserPigeWhoPickedTheOtherUserPige().equals(userPigeWithUserPickedToCreate.getUserPigeWhoIsPickedByTheUserPige())) {
                        if (!userPigeWithUserPickedRepository.existsByUserPigeWhoIsPickedByTheUserPige(testFirstUserPicked)) {
                            if (!userPigeWithUserPickedRepository.existsByUserPigeWhoPickedTheOtherUserPige(testSecondUserPicked)) {
                                userPigeWithUserPickedRepository.save(userPigeWithUserPickedToCreate);
                                messageCreate = "ACK-100";
                            }
                        }
                    }
                }
            }
            return messageCreate;
        } catch (Exception e) {
            return messageCreate + e.getMessage();
        }

    }

    // (Verified and tested)
    @PutMapping("/updateUserPickedByIdUserPigePicked")
    public String updateCoupleByUser (@RequestParam int idUserPigePicked, @RequestBody UserPigeWithUserPicked userPigeWithUserPickedUpdated) throws Exception {
        String messageUpdate = "ACK-011";
        try{
            if (userPigeWithUserPickedUpdated.getUserPigeWhoPickedTheOtherUserPige() != null
                    && userPigeWithUserPickedUpdated.getUserPigeWhoIsPickedByTheUserPige() != null) {
                UserPigeWithUserPicked userPigeWithUserPickedToUpdate = userPigeWithUserPickedRepository.findByIdUserPigeWithUserPigePicked(idUserPigePicked);
                UserPige testFirstUserPicked = userPigeRepository.findByIdUserPige(userPigeWithUserPickedUpdated.getUserPigeWhoPickedTheOtherUserPige().getIdUserPige());
                UserPige testSecondUserPicked = userPigeRepository.findByIdUserPige(userPigeWithUserPickedUpdated.getUserPigeWhoIsPickedByTheUserPige().getIdUserPige());

                if (testFirstUserPicked.getPige().equals(testSecondUserPicked.getPige())) {
                    if (!userPigeWithUserPickedRepository.existsByUserPigeWhoIsPickedByTheUserPige(testFirstUserPicked)) {
                        if (!userPigeWithUserPickedRepository.existsByUserPigeWhoPickedTheOtherUserPige(testSecondUserPicked)) {
                            if (!userPigeWithUserPickedUpdated.getUserPigeWhoPickedTheOtherUserPige().equals(userPigeWithUserPickedUpdated.getUserPigeWhoIsPickedByTheUserPige())) {
                                userPigeWithUserPickedToUpdate.setUserPigeWhoPickedTheOtherUserPige(userPigeWithUserPickedUpdated.getUserPigeWhoPickedTheOtherUserPige());
                                userPigeWithUserPickedToUpdate.setUserPigeWhoIsPickedByTheUserPige(userPigeWithUserPickedUpdated.getUserPigeWhoIsPickedByTheUserPige());
                                userPigeWithUserPickedRepository.save(userPigeWithUserPickedToUpdate);
                                messageUpdate = "ACK-010";
                            }
                        }
                    }
                }
            }
            return messageUpdate;
        } catch (Exception e){
            return messageUpdate + e.getMessage();
        }
    }
}

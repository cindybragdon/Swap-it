package com.swapit.controllers;

import com.swapit.model.Invitations;
import com.swapit.model.Pige;
import com.swapit.model.UserPige;
import com.swapit.repositories.PigeRepository;
import com.swapit.repositories.UserPigeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")
public class UserPigeServerController {

    @Autowired
    private UserPigeRepository userPigeRepository;

    @Autowired
    private PigeRepository pigeRepository;

    //(Verified and tested)
    @PostMapping("/createUserPigeWithoutPige")
    public String createUserPige(@RequestBody UserPige userPigeToCreate) throws Exception{
        String messageInvitation = "ACK-401";
        try{
            if (userPigeToCreate.getUser() != null && userPigeToCreate.getPige() != null) {
                if (!userPigeRepository.existsUserPigeByUser_IdUserAndPige_IdPige(userPigeToCreate.getUser().getIdUser(), userPigeToCreate.getPige().getIdPige())) {
                    userPigeRepository.save(userPigeToCreate);
                    messageInvitation = "ACK-400";
                }
            }
        }catch (Exception e){
            return messageInvitation + e.getMessage();
        }
        return messageInvitation;

    }

    //(Verified and tested)
    @PostMapping("/createUserPigeWithPige")
    public String createUserPigeWithPige(@RequestBody UserPige userPigeToCreate) throws Exception{
        String messageInvitation = "ACK-401";

        try{

            if (userPigeToCreate.getUser() != null
                    && (userPigeToCreate.getPige().getPigeName() != null)
                    && (userPigeToCreate.getPige().getPigeType() != null)
                    && (userPigeToCreate.getPige().getPigeState() != null)
                    && (userPigeToCreate.getPige().getPigeEndDate() != null)
                    && (userPigeToCreate.getPige().getPigeType().equals("THEMED")
                    || userPigeToCreate.getPige().getPigeType().equals("TARGETED")
                    || userPigeToCreate.getPige().getPigeType().equals("NORMAL")
                    || userPigeToCreate.getPige().getPigeType().equals("GIFTLIST"))
                    && (userPigeToCreate.getPige().getPigeState().equals("CREATED")
                    || userPigeToCreate.getPige().getPigeState().equals("AVIS LANCEE")
                    || userPigeToCreate.getPige().getPigeState().equals("STARTED")
                    || userPigeToCreate.getPige().getPigeState().equals("ENDED")
            )) {
                userPigeToCreate.getPige().setUserAdmin(userPigeToCreate.getUser());
                Date date = new Date();
                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String currentDateTime = dateFormat.format(date);
                userPigeToCreate.getPige().setPigeTimestampCreation(Timestamp.valueOf(currentDateTime));
                pigeRepository.save(userPigeToCreate.getPige());
                userPigeRepository.save(userPigeToCreate);
                messageInvitation = "ACK-400";
            }

        }catch (Exception e){
            return messageInvitation + e.getMessage();
        }
        return messageInvitation;

    }
    //Get all the piges from one user (Verified and tested)
    @GetMapping("/getListUserPigeFromIdUser")
    public List<UserPige> getListUserPigeFromIdUser(@RequestParam int idUser) throws Exception {
        try {
            return userPigeRepository.findAllByUser_IdUser(idUser);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }

    }

    /*
    @GetMapping("/getInfoUserPigeByIdUserAndIdPige")
    public UserPige getInfoUserPigeByIdUserAndIdPige(int idUser, int idPige) throws Exception {
        try {
            return userPigeRepository.findByUser_IdUserAndPige_IdPige(idUser, idPige);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

     */
}

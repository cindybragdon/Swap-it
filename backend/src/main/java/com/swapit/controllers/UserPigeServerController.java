package com.swapit.controllers;


import com.swapit.model.Pige;
import com.swapit.model.UserPige;
import com.swapit.repositories.PigeRepository;
import com.swapit.repositories.UserPigeRepository;
import com.swapit.repositories.UserRepository;
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
    private UserRepository userRepository;

    @Autowired
    private PigeRepository pigeRepository;

    //(Verified and tested)
    @PostMapping("/createUserPigeWithoutPige")
    public String createUserPigeWithoutPige(@RequestBody UserPige userPigeToCreate) throws Exception{
        String messageInvitation = "ACK-401";
        try{
            if (userPigeToCreate.getUser() != null
            && userPigeToCreate.getPige() != null) {
                if(userRepository.existsByIdUser(userPigeToCreate.getUser().getIdUser())
                && pigeRepository.existsById(userPigeToCreate.getPige().getIdPige())) {
                    if (!userPigeRepository.existsUserPigeByUser_IdUserAndPige_IdPige(userPigeToCreate.getUser().getIdUser(), userPigeToCreate.getPige().getIdPige())) {
                        userPigeRepository.save(userPigeToCreate);
                        messageInvitation = "ACK-400";
                    }
                }
            }
        }catch (Exception e){
            return messageInvitation + e.getMessage();
        }
        return messageInvitation;

    }



    //(Verified and tested)
    @PostMapping("/createUserPigeWithPige")
    public Pige createUserPigeWithPige(@RequestBody UserPige userPigeToCreate) throws Exception{

        Date date = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String currentDateTime = dateFormat.format(date);

        try{

            if (userPigeToCreate.getUser() != null
                    && (userPigeToCreate.getPige().getPigeName() != null)
                    && (userPigeToCreate.getPige().getPigeType() != null)
                    && (userPigeToCreate.getPige().getPigeEndDate() != null)
                    && ((userPigeToCreate.getPige().getPigeType().equals("THEMED")
                    || userPigeToCreate.getPige().getPigeType().equals("TARGETED")
                    || userPigeToCreate.getPige().getPigeType().equals("NORMAL")
                    || userPigeToCreate.getPige().getPigeType().equals("GIFTLIST"))
            )) {
                if(userRepository.existsByIdUser(userPigeToCreate.getUser().getIdUser())){
                    userPigeToCreate.getPige().setUserAdmin(userPigeToCreate.getUser());
                    userPigeToCreate.getPige().setPigeState("CREATED");
                    userPigeToCreate.getPige().setPigeTimestampCreation(Timestamp.valueOf(currentDateTime));
                    userPigeToCreate.getPige().setActive(true);
                    userPigeToCreate.getPige().setNumberPigeOfUser(pigeRepository.countPigesByUserAdmin_IdUser(userPigeToCreate.getUser().getIdUser())+1);
                    pigeRepository.save(userPigeToCreate.getPige());
                    userPigeRepository.save(userPigeToCreate);
                }

            }
            return pigeRepository.findPigeByNumberPigeOfUser(pigeRepository.countPigesByUserAdmin_IdUser(userPigeToCreate.getUser().getIdUser()));
        }catch (Exception e){
            return new Pige();
        }

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

    @GetMapping("/getListUserPigeFromIdPige")
    public List<UserPige> getListUserPigeFromIdPige(@RequestParam int idPige) throws Exception {
        try {
            return userPigeRepository.findAllByPige_IdPige(idPige);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }

    }

    //Update Password
    @PutMapping("/updateUserPigePseudoAndImage")
    public String updateUserPigePseudoAndImage(@RequestBody UserPige userPigeUpdated) throws Exception {
        String messagePwdUpdated = "ACK-511";
        try {
            if(userPigeRepository.existsByIdUserPige(userPigeUpdated.getIdUserPige())) {
                UserPige userPigeToUpdate = userPigeRepository.findByIdUserPige((userPigeUpdated.getIdUserPige()));
                userPigeToUpdate.setUserPigeImage(userPigeUpdated.getUserPigeImage());
                userPigeToUpdate.setUserPigePseudo(userPigeUpdated.getUserPigePseudo());
                userPigeRepository.save(userPigeToUpdate);
                messagePwdUpdated = "ACK-510";
            }


            return messagePwdUpdated;
        } catch (Exception e) {
            return messagePwdUpdated + e.getMessage();
        }

    }


}

package com.swapit.controllers;

import com.swapit.model.Pige;
import com.swapit.model.Shadow;
import com.swapit.model.User;
import com.swapit.repositories.ShadowRepository;
import com.swapit.repositories.UserRepository;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")


public class ShadowServerController {

    @Autowired
    private ShadowRepository shadowRepository;

    @Autowired
    private UserRepository userRepository;



    @GetMapping("/loginByEmailAndPassword")
    public Shadow loginByEmailAndPassword(@RequestParam String userEmail, @RequestParam String password) throws Exception {
        try {
            return shadowRepository.findByUser_UserEmailAndUserPassword(userEmail, password);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @GetMapping("/getPWDByIdUser")
    public Shadow getPWDByIdUser(@RequestParam int idUser) throws Exception {
        try {
            return shadowRepository.findByUser_IdUser(idUser);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }



    @PostMapping("/createShadowAndUser")
    public String createShadowAndUser(@RequestBody Shadow shadowToCreate) throws Exception {
        String messagePwdCreate = "ACK-301";
        try {
            if (shadowToCreate.getUserPassword() != null
                    && shadowToCreate.getUser() != null
                    && shadowToCreate.getUser().getUserFirstName() != null
                    && shadowToCreate.getUser().getUserLastName() != null
                    && shadowToCreate.getUser().getUserEmail() != null) {

                boolean userExists = userRepository.existsUserByUserEmail(shadowToCreate.getUser().getUserEmail());
                if (userExists) {
                    messagePwdCreate = "ACK-102";
                } else {
                    userRepository.save(shadowToCreate.getUser());
                    shadowRepository.save(shadowToCreate);
                    messagePwdCreate = "ACK-100";
                }
            }
            return messagePwdCreate;
        } catch (Exception e) {
            return messagePwdCreate + e.getMessage();
        }
    }

    // (Verified and tested)
    @PostMapping("/createShadow")
    public String createShadow(@RequestBody Shadow shadowToCreate) throws Exception {
        String messagePwdCreate = "ACK-301";
        try {
            if (shadowToCreate.getUserPassword() != null
            && shadowToCreate.getUser() != null) {
                shadowRepository.save(shadowToCreate);
                messagePwdCreate = "ACK-300";
            }
            return messagePwdCreate;
        } catch (Exception e) {
            return messagePwdCreate + e.getMessage();
        }
    }



    //Update Password
    // (Verified and tested)
    @PutMapping("/updatePwdAndUser")
    public String updatePwdAndUser(@RequestBody Shadow shadowUpdated) throws Exception {
        String messagePwdUpdated = "ACK-211";
        try {
            if (shadowUpdated.getUserPassword() != null
                    && shadowUpdated.getUser() != null
                    && shadowUpdated.getUser().getUserEmail() != null
                    && shadowUpdated.getUser().getUserFirstName() != null
                    && shadowUpdated.getUser().getUserLastName() != null) {
                Shadow shadow = shadowRepository.findByUser_IdUser(shadowUpdated.getUser().getIdUser());

                boolean userIdExists = userRepository.existsUserByIdUser(shadow.getUser().getIdUser());
                boolean userEmailExists = userRepository.existsUserByUserEmail(shadowUpdated.getUser().getUserEmail());
                boolean userEmailExistsButIsTheRightUser = userRepository.existsUserByIdUserAndUserEmail(shadowUpdated.getUser().getIdUser(), shadowUpdated.getUser().getUserEmail());

                if (userIdExists) {
                    if (!userEmailExists || userEmailExistsButIsTheRightUser) {
                        User user = userRepository.findUserByIdUser(shadowUpdated.getUser().getIdUser());
                        user.setUserFirstName(shadowUpdated.getUser().getUserFirstName());
                        user.setUserLastName(shadowUpdated.getUser().getUserLastName());
                        user.setUserEmail(shadowUpdated.getUser().getUserEmail());
                        user.setUserPhone(shadowUpdated.getUser().getUserPhone());
                        user.setUserImage(shadowUpdated.getUser().getUserImage());
                        shadow.setUserPassword(shadowUpdated.getUserPassword());
                        userRepository.save(user);
                        shadowRepository.save(shadow);
                        messagePwdUpdated = "ACK-110";
                    }
                }


                messagePwdUpdated = "ACK-210";
            }
            return messagePwdUpdated;
        } catch (Exception e) {
            return messagePwdUpdated + e.getMessage();
        }

    }



}

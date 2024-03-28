package com.swapit.controllers;

import com.swapit.model.User;
import com.swapit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")

public class UserServerController {

    @Autowired
    private UserRepository userRepository;


    //Create user (Verified and tested)
    @PostMapping("/createUserByEmail")
    public String createUserByEmail(@RequestBody User userToCreate) throws Exception {

        String messageCreate = "ACK-101";
        try {
            if (userToCreate.getUserEmail() != null
                    && userToCreate.getUserFirstName() != null
                    && userToCreate.getUserLastName() != null){
                boolean userExists = userRepository.existsUserByUserEmail(userToCreate.getUserEmail());
                if (userExists) {
                    messageCreate = "ACK-102";
                } else {
                    userRepository.save(userToCreate);
                    messageCreate = "ACK-100";
                }
            }
            return messageCreate;
        } catch (Exception e) {
            return messageCreate + e.getMessage();
        }
    }

    //Update user account (update) (Verified and tested)
    @PutMapping("/updateUserById")
    public String updateUserById(@RequestBody User userUpdated, @RequestParam int idUser) throws Exception {
        String messageUpdate = "ACK-111";
        try {
            if (userUpdated.getUserEmail() != null
                    && userUpdated.getUserFirstName() != null
                    && userUpdated.getUserLastName() != null) {
                boolean userIdExists = userRepository.existsUserByIdUser(idUser);
                boolean userEmailExists = userRepository.existsUserByUserEmail(userUpdated.getUserEmail());
                boolean userEmailExistsButIsTheRightUser = userRepository.existsUserByIdUserAndUserEmail(idUser, userUpdated.getUserEmail());

                if (userIdExists) {
                    if (!userEmailExists || userEmailExistsButIsTheRightUser) {
                        User user = userRepository.findUserByIdUser(idUser);
                        user.setUserFirstName(userUpdated.getUserFirstName());
                        user.setUserLastName(userUpdated.getUserLastName());
                        user.setUserEmail(userUpdated.getUserEmail());
                        user.setUserPhone(userUpdated.getUserPhone());
                        user.setUserImage(userUpdated.getUserImage());
                        userRepository.save(user);
                        messageUpdate = "ACK-110";
                    }
                }
            }
        } catch (Exception e) {
            return messageUpdate + e.getMessage();
        }
        return messageUpdate;
    }


    //Find User by email (Verified and tested)
    @GetMapping("/getUserByEmail")
    public User getUserByEmail(@RequestParam String userEmail) throws Exception {
        try {
            return userRepository.findUserByUserEmail(userEmail);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }





}

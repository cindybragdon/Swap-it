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


    //Create user
    @PostMapping("/createUser")
    //public String createUser(@PathVariable....
    public String createUser(@RequestBody User userToCreate) throws Exception {

        String messageCreate = "ACK-101";
        try {
            boolean userExists = userRepository.existsByUserEmail(userToCreate);
            if (userExists) {
                messageCreate = "ACK-102";
            } else {
                userRepository.save(userToCreate);
                messageCreate = "ACK-100";
            }
            return messageCreate;
        } catch (Exception e) {
            return messageCreate + e.getMessage();
        }
    }

    //Update user account (update)
    @PutMapping("/updateUserById")
    public String updateUserById(@RequestBody User userUpdated, @RequestParam int idUser) throws Exception {
        String messageUpdate = "ACK-111";
        try {
            boolean userExists = userRepository.existsByUserEmail(userUpdated);

            if (userExists) {
                User user = userRepository.findUserByIdUser(idUser);
                user.setUserFirstName(userUpdated.getUserFirstName());
                user.setUserLastName(userUpdated.getUserLastName());
                user.setUserEmail(userUpdated.getUserEmail());
                user.setUserPhone(userUpdated.getUserPhone());
                userRepository.save(user);
                messageUpdate = "ACK-110";
            }

        } catch (Exception e) {
            return messageUpdate + e.getMessage();
        }
        return messageUpdate;
    }


    //Find User by email
    @GetMapping("/getUserByEmail/{userEmail}")
    public User getUserByEmail(@PathVariable String userEmail) throws Exception {
        try {
            return userRepository.findUserByUserEmail(userEmail);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }


}

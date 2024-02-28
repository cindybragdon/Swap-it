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
    public String createUser(@RequestBody User userToCreate) {
        boolean userExists = userRepository.existsByUserEmail(userToCreate);
        String messageCreate = "ACK-101";

        if (userExists) {
            messageCreate = "ACK-102";
        } else {
            try{
                userRepository.save(userToCreate);
                messageCreate = "ACK-100";
            } catch(Exception e){
                return messageCreate + e.getMessage();
            }
        }
        return messageCreate;
    }

    //Update user account (update)
    @PutMapping("/updateUserById")
    public String updateUserById(@RequestBody User userUpdated, @RequestParam int idUser) {
        boolean userExists = userRepository.existsByUserEmail(userUpdated);
        String messageUpdate = "ACK-111";
        if (userExists) {
            User user = userRepository.findUserByIdUser(idUser);
            user.setUserFirstName(userUpdated.getUserFirstName());
            user.setUserLastName(userUpdated.getUserLastName());
            user.setUserEmail(userUpdated.getUserEmail());
            user.setUserPhone(userUpdated.getUserPhone());
            userRepository.save(user);
            messageUpdate = "ACK-110";
            return messageUpdate;
        }
        return messageUpdate;
    }



    //Find User by email
    @GetMapping("/getUserByEmail/{userEmail}")
    public User getUserByEmail(@PathVariable String userEmail) {
        return userRepository.findUserByUserEmail(userEmail);
    }




}

package com.swapit.controllers;

import com.swapit.model.User;
import com.swapit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")

public class UserServerController {

    @Autowired
    private UserRepository userRepository;


    //List of all users (select)
    @GetMapping("/getAllUsers")
    public List<User> getAll() {
        return userRepository.findAll();
    }

    //Find Id user by email
    //Find about all from a user by its id
    @GetMapping("/getIdByEmail")
    public Integer getIdByEmail(@RequestBody String userEmail) {
        User user =userRepository.findUserByUserEmail(userEmail);
        return user.getIdUser();
    }

    //Find User by email
    @GetMapping("/getUserByEmail")
    public User getUserByEmail(@RequestParam String email) {
        return userRepository.findUserByUserEmail(email);
    }

    //Create user
    //To create a user, please call in javascript in order :
    //  /createUser ==>  /getIdByEmail  ==>  /newUserPwd
    @PostMapping("/createUser")
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
        String messageUpdate = "ACK-111";
        try {
            User user = userRepository.findUserByIdUser(idUser);
            user.setUserFirstName(userUpdated.getUserFirstName());
            user.setUserLastName(userUpdated.getUserLastName());
            user.setUserEmail(userUpdated.getUserEmail());
            user.setUserPhone(userUpdated.getUserPhone());
            userRepository.save(user);
            messageUpdate = "ACK-110";
            return messageUpdate;
        } catch (Exception e) {
            return messageUpdate + e.getMessage();
        }
    }


}

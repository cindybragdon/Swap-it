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



    @GetMapping("/getUserByEmail")
    public User getUserByEmail(@RequestParam String userEmail) throws Exception {
        try {
            return userRepository.findByUserEmail(userEmail);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @GetMapping("/getUserById")
    public User getUserById(@RequestParam int idUser) throws Exception {
        try {
            return userRepository.findByIdUser(idUser);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

}

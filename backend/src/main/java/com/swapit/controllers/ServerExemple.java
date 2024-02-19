package com.swapit.controllers;

import com.swapit.model.User;
import com.swapit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5555")
@RequestMapping("/api")
public class ServerExemple {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/getAllUsers")
    public List<User> getAll() {
        return userRepository.findAll();
    }


}

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
    @PutMapping("/updatePwdById")
    public String updatePwdById(@RequestBody Shadow shadowUpdated) throws Exception {
        String messagePwdUpdated = "ACK-211";
        try {
            if (shadowUpdated.getUserPassword() != null && shadowUpdated.getUser() != null) {
                Shadow shadow = shadowRepository.findByUser_IdUser(shadowUpdated.getUser().getIdUser());
                shadow.setUserPassword(shadowUpdated.getUserPassword());
                shadowRepository.save(shadow);
                messagePwdUpdated = "ACK-210";
            }
            return messagePwdUpdated;
        } catch (Exception e) {
            return messagePwdUpdated + e.getMessage();
        }

    }



}

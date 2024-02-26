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

    @PostMapping("/createPige")
    public String createPige(@RequestBody Shadow shadowToCreate) {
        String messagePigeCreate = "ACK-301";
        try{
            shadowRepository.save(shadowToCreate);
            return messagePigeCreate = "ACK-300";
        }catch (Exception e){
            return messagePigeCreate + e.getMessage();
        }
    }

    //Update Password
    @PutMapping("/updatePwdById")
    public String updatePwdById(@RequestBody Shadow shadowUpdated, @RequestParam int idUser) {
        String messagePwdUpdated = "ACK-211";
        try{
            Shadow shadow = shadowRepository.findByUser_IdUser(idUser);
            shadow.setUserPassword(shadowUpdated.getUserPassword());
            shadowRepository.save(shadow);
            messagePwdUpdated = "ACK-210";
            return messagePwdUpdated;
        }catch (Exception e){
            return messagePwdUpdated + e.getMessage();
        }

    }




}

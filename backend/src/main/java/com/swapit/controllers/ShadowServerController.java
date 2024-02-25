package com.swapit.controllers;

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

    //New account
    @PostMapping("/newUserPwd")
    public Shadow newUserPwd(@RequestBody Shadow newShadow, @RequestParam int idUser) {
        Shadow shadow = shadowRepository.findByIdUser(idUser);
        shadow.setUserPassword(shadow.getUserPassword());
            return shadowRepository.save(shadow);
    }

    //Update Password
    @PutMapping("/updatePwdById")
    public Shadow updatePwdById(@RequestBody Shadow shadowUpdated, @RequestParam int idUser) {
        Shadow shadow = shadowRepository.findByIdUser(idUser);
        shadow.setUserPassword(shadowUpdated.getUserPassword());
        return shadowRepository.save(shadow);
    }




}

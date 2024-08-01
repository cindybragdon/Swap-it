package com.swapit.controllers;

import com.swapit.model.Toto;
import com.swapit.repositories.TotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")

public class TotoServerController {

    @Autowired
    private TotoRepository totoRepository;


    //Find User by email (Verified and tested)
    @GetMapping("/getTotoByEmail")
    public Toto getTotoByEmail(@RequestParam String totoEmail) throws Exception {
        try {
            return totoRepository.findTotoByTotoEmail(totoEmail);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }






}

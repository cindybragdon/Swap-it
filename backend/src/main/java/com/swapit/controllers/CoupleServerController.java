package com.swapit.controllers;


import com.swapit.model.Couple;
import com.swapit.model.UserPige;
import com.swapit.repositories.CoupleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")


public class CoupleServerController {

    @Autowired
    private CoupleRepository coupleRepository;


    @PostMapping("/createCoupleByUser")
    public String createCoupleByUser(@RequestBody UserPige firstUserPigeConjoint, @RequestBody UserPige secondUserPigeConjoint ) throws Exception {
        String messageCreate = "ACK-001";
        Couple newConjoint1 = new Couple();
        newConjoint1.setFirstConjoint(firstUserPigeConjoint);
        newConjoint1.setSecondConjoint(secondUserPigeConjoint);

        try {

            coupleRepository.save(newConjoint1);
            messageCreate = "ACK-000";
            return messageCreate;
        } catch (Exception e) {
            return messageCreate + e.getMessage();
        }
    }

    @PutMapping("/updateCoupleByUser")
    public String updateCoupleByUser (@RequestBody UserPige firstUserPigeConjoint, @RequestBody UserPige secondUserPigeConjoint, @RequestParam int idCouple, @RequestBody Couple coupleUpdated ) throws Exception {
        String messageUpdate = "ACK-011";
        try{
        Couple couple = coupleRepository.findByIdCouple(idCouple);
        couple.setFirstConjoint(coupleUpdated.getFirstConjoint());
        couple.setSecondConjoint(coupleUpdated.getSecondConjoint());
        coupleRepository.save(couple);
        messageUpdate = "ACK-010";
        return messageUpdate;
        } catch (Exception e){
            return messageUpdate + e.getMessage();
        }
    }



}

package com.swapit.controllers;


import com.swapit.model.Couple;
import com.swapit.model.UserPige;
import com.swapit.repositories.CoupleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")


public class  CoupleServerController {

    @Autowired
    private CoupleRepository coupleRepository;


    @PostMapping("/createCouple")
    public String createCoupleByUser(@RequestBody Couple coupleToCreate) throws Exception {
        String messageCreate = "ACK-001";
        try {
            if (coupleToCreate.getFirstConjoint() != null
            && coupleToCreate.getSecondConjoint() != null) {
                coupleRepository.save(coupleToCreate);
                messageCreate = "ACK-000";
            }

            return messageCreate;
        } catch (Exception e) {
            return messageCreate + e.getMessage();
        }
    }

    @PutMapping("/updateCoupleByIdCouple")
    public String updateCoupleByUser (@RequestParam int idCouple, @RequestBody Couple coupleUpdated) throws Exception {
        String messageUpdate = "ACK-011";
        try{
            if (coupleUpdated.getFirstConjoint() != null && coupleUpdated.getSecondConjoint() != null) {
                Couple couple = coupleRepository.findByIdCouple(idCouple);
                couple.setFirstConjoint(coupleUpdated.getFirstConjoint());
                couple.setSecondConjoint(coupleUpdated.getSecondConjoint());
                coupleRepository.save(couple);
                messageUpdate = "ACK-010";
            }
        return messageUpdate;
        } catch (Exception e){
            return messageUpdate + e.getMessage();
        }
    }
    //Get all the piges from one user
    @GetMapping("/getListAllCoupleFromPige")
    public List<Couple> getListAllCoupleFromPige(int idPige) throws Exception {
        try {
            return coupleRepository.findCouplesByFirstConjoint_Pige_IdPige(idPige);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }

    }
}

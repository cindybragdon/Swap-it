package com.swapit.controllers;


import com.swapit.model.Couple;
import com.swapit.model.UserPige;
import com.swapit.repositories.CoupleRepository;
import com.swapit.repositories.PigeRepository;
import com.swapit.repositories.UserPigeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")


public class  CoupleServerController {

    @Autowired
    private CoupleRepository coupleRepository;

    @Autowired
    private UserPigeRepository userPigeRepository;

    // (Verified and tested)
    @PostMapping("/createCouple")
    public String createCoupleByUser(@RequestBody Couple coupleToCreate) throws Exception {
        String messageCreate = "ACK-001";
        try {
            if (coupleToCreate.getFirstConjoint() != null
            && coupleToCreate.getSecondConjoint() != null) {
                UserPige testFirstConjoint = userPigeRepository.findByIdUserPige(coupleToCreate.getFirstConjoint().getIdUserPige());
                UserPige testSecondConjoint = userPigeRepository.findByIdUserPige(coupleToCreate.getSecondConjoint().getIdUserPige());

                if (testFirstConjoint.getPige().equals(testSecondConjoint.getPige())) {
                    if (!coupleToCreate.getFirstConjoint().equals(coupleToCreate.getSecondConjoint())) {
                        if(!coupleRepository.existsBySecondConjoint(testFirstConjoint)){
                            if(!coupleRepository.existsByFirstConjoint(testSecondConjoint)) {
                                coupleRepository.save(coupleToCreate);
                                messageCreate = "ACK-000";
                            }
                        }
                    }
                }
            }

            return messageCreate;
        } catch (Exception e) {
            return messageCreate + e.getMessage();
        }
    }

    // (Verified and tested)
    @PutMapping("/updateCoupleByIdCouple")
    public String updateCoupleByUser (@RequestParam int idCouple, @RequestBody Couple coupleUpdated) throws Exception {
        String messageUpdate = "ACK-011";
        try{
            if (coupleUpdated.getFirstConjoint() != null && coupleUpdated.getSecondConjoint() != null) {
                Couple couple = coupleRepository.findByIdCouple(idCouple);
                UserPige testFirstConjoint = userPigeRepository.findByIdUserPige(coupleUpdated.getFirstConjoint().getIdUserPige());
                UserPige testSecondConjoint = userPigeRepository.findByIdUserPige(coupleUpdated.getSecondConjoint().getIdUserPige());
                if (testFirstConjoint.getPige().equals(testSecondConjoint.getPige())) {
                    if (!coupleUpdated.getFirstConjoint().equals(coupleUpdated.getSecondConjoint())) {
                        if(!coupleRepository.existsBySecondConjoint(testFirstConjoint)) {
                            if (!coupleRepository.existsByFirstConjoint(testSecondConjoint)) {
                                couple.setFirstConjoint(coupleUpdated.getFirstConjoint());
                                couple.setSecondConjoint(coupleUpdated.getSecondConjoint());
                                coupleRepository.save(couple);
                                messageUpdate = "ACK-010";
                            }
                        }
                    }
                }
            }
        return messageUpdate;
        } catch (Exception e){
            return messageUpdate + e.getMessage();
        }
    }

    // (Verified and tested)
    @GetMapping("/getListAllCoupleFromPige")
    public List<Couple> getListAllCoupleFromPige(@RequestParam int idPige) throws Exception {
        try {
            return coupleRepository.findCouplesByFirstConjoint_Pige_IdPige(idPige);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }

    }
}

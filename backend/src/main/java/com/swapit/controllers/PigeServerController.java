package com.swapit.controllers;

import com.swapit.model.Pige;

import com.swapit.repositories.PigeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")


public class PigeServerController {

    @Autowired
    private PigeRepository pigeRepository;

    //Get les infos pour courriel dans Java (nom pige, pige description, nom admin, date pige,url et QrCode)
    //Update pige
    // If admin is updated, change toggle to isNotAdmin
    // (Verified and tested)
    @PutMapping("/updatePige")
    public String updatePige(@RequestBody Pige pigeUpdated) {
        String messagePigeUpdated = "ACK-311";
        try {
            if (pigeRepository.existsById(pigeUpdated.getIdPige())) {
                if (pigeUpdated.getPigeName() != null
                        && pigeUpdated.getPigeType() != null
                        && pigeUpdated.getPigeEndDate() != null
                        && (pigeUpdated.getPigeType().equals("THEMED")
                        || pigeUpdated.getPigeType().equals("TARGETED")
                        || pigeUpdated.getPigeType().equals("NORMAL")
                        || pigeUpdated.getPigeType().equals("GIFTLIST")
                )) {

                    Pige pige = pigeRepository.findPigeByIdPige(pigeUpdated.getIdPige());
                    pige.setPigeName(pigeUpdated.getPigeName());
                    pige.setPigeType(pigeUpdated.getPigeType());
                    pige.setPigeDescription(pigeUpdated.getPigeDescription());
                    pige.setPigeEndDate(pigeUpdated.getPigeEndDate());
                    pige.setPigeSuggestedMoneyAmount(pigeUpdated.getPigeSuggestedMoneyAmount());
                    pige.setPigeImage(pigeUpdated.getPigeImage());
                    pigeRepository.save(pige);
                    messagePigeUpdated = "ACK-310";
                }
            }

            return messagePigeUpdated;
        } catch (Exception e) {
            return messagePigeUpdated + e.getMessage();
        }
    }


    @PutMapping("/deletePige")
    public String deletePige(@RequestParam int idPige) throws Exception {
        String messageDeletePige = "ACK-321";
        try {

            if (pigeRepository.existsById(idPige)) {
                Pige pigeToUpdate = pigeRepository.findPigeByIdPige(idPige);
                pigeToUpdate.setActive(false);
                pigeRepository.save(pigeToUpdate);
                messageDeletePige = "ACK-320";
            } else {
                messageDeletePige = "ACK-322";
            }
            return messageDeletePige;
        } catch (Exception e) {
            return messageDeletePige + e.getMessage();
        }

    }




}

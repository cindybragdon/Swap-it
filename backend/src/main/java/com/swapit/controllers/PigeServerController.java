package com.swapit.controllers;

import com.swapit.model.Pige;
import com.swapit.model.User;
import com.swapit.repositories.PigeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")


public class PigeServerController {

    @Autowired
    private PigeRepository pigeRepository;


    //Create new Pige (Verified and tested)
    @PostMapping("/createPige")
    public String createPige(@RequestBody Pige pigeToCreate) {
        String messagePigeCreate = "ACK-301";

        try {
            if ((pigeToCreate.getPigeName() != null)
                    && (pigeToCreate.getPigeType() != null)
                    && (pigeToCreate.getPigeState() != null)
                    && (pigeToCreate.getPigeUrl() != null)
                    && (pigeToCreate.getPigeEndDate() != null)
                    && (pigeToCreate.getPigeType().equals("THEMED")
                        || pigeToCreate.getPigeType().equals("TARGETED")
                        || pigeToCreate.getPigeType().equals("NORMAL")
                        || pigeToCreate.getPigeType().equals("GIFTLIST"))
                    && (pigeToCreate.getPigeState().equals("CREATED")
                        || pigeToCreate.getPigeState().equals("AVIS LANCEE")
                        || pigeToCreate.getPigeState().equals("STARTED")
                        || pigeToCreate.getPigeState().equals("ENDED")
                    )) {


                Date date = new Date();
                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String currentDateTime = dateFormat.format(date);
                pigeToCreate.setPigeTimestampCreation(Timestamp.valueOf(currentDateTime));

                pigeRepository.save(pigeToCreate);
                messagePigeCreate = "ACK-300";
            }

            return messagePigeCreate;
        } catch (Exception e) {
            return messagePigeCreate + e.getMessage();
        }
    }

    //Get les infos pour courriel dans Java (nom pige, pige description, nom admin, date pige,url et QrCode)
    //Update pige
    // If admin is updated, change toggle to isNotAdmin

    @PutMapping("/updatePige")
    public String updatePige(@RequestBody Pige pigeUpdated, @RequestParam int idPige) {
        String messagePigeUpdated = "ACK-311";
        try {
            if (pigeUpdated.getPigeName() != null
            && pigeUpdated.getPigeType() != null
            && pigeUpdated.getPigeEndDate() != null
            && (pigeUpdated.getPigeType().equals("THEMED")
            || pigeUpdated.getPigeType().equals("TARGETED")
            || pigeUpdated.getPigeType().equals("NORMAL")
            || pigeUpdated.getPigeType().equals("GIFTLIST"))) {

                Pige pige = pigeRepository.findPigeByIdPige(idPige);
                pige.setPigeName(pigeUpdated.getPigeName());
                pige.setPigeType(pigeUpdated.getPigeType());
                pige.setPigeDescription(pigeUpdated.getPigeDescription());
                pige.setPigeEndDate(pigeUpdated.getPigeEndDate());
                pige.setPigeSuggestedMoneyAmount(pigeUpdated.getPigeSuggestedMoneyAmount());
                pige.setPigeImage(pigeUpdated.getPigeImage());
                pige.setUserAdmin(pigeUpdated.getUserAdmin());
                pigeRepository.save(pige);
                messagePigeUpdated = "ACK-310";
            }
            return messagePigeUpdated;
        } catch (Exception e) {
            return messagePigeUpdated + e.getMessage();
        }
    }

    @DeleteMapping("/deletePige")
    public String deletePige(@RequestParam int idPige) throws Exception {
        String messageDeletePige = "ACK-321";
        try {
            boolean pigeExists = pigeRepository.existsById(idPige);
            if (pigeExists) {
                pigeRepository.deleteByIdPige(idPige);
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

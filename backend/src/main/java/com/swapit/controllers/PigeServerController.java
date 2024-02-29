package com.swapit.controllers;

import com.swapit.model.Pige;
import com.swapit.model.User;
import com.swapit.repositories.PigeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")


public class PigeServerController {

    @Autowired
    private PigeRepository pigeRepository;


    //Create new Pige
    @PostMapping("/createPige")
    public String createPige(@RequestBody Pige pigeToCreate) {
        String messagePigeCreate = "ACK-301";
        try{
            pigeRepository.save(pigeToCreate);
            return messagePigeCreate = "ACK-300";
        }catch (Exception e){
            return messagePigeCreate + e.getMessage();
        }
    }

    //Get les infos pour courriel dans Java (nom pige, pige description, nom admin, date pige,url et QrCode)
    //Update pige
    // If admin is updated, change toggle to isNotAdmin
    @PutMapping("/updatePige")
    public String updatePige(@RequestBody Pige pigeUpdated, @RequestParam int idPige){
        String messagePigeUpdated = "ACK-311";
        try{

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
            return messagePigeUpdated;
        }catch (Exception e) {
            return messagePigeUpdated + e.getMessage();
        }
    }

    @DeleteMapping("{idPide}")
    public String deletePige(@PathVariable int idPige) {
        String messageDeletePige = "ACK-321";
        boolean pigeExists = pigeRepository.existsById(idPige);
        if (pigeExists) {
            pigeRepository.delete(idPige);
            messageDeletePige = "ACK-320";
        }else {
            return messageDeletePige = "ACK-322";
        }
        return messageDeletePige;
    }






}

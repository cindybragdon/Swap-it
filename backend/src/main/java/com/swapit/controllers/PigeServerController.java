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


    //Create new Pige
    @PostMapping("/createPige")
    public String createPige(@RequestBody Pige pigeToCreate) {
    String messagePigeCreate = "La pige a été créée";
    pigeRepository.save(pigeToCreate);
    return messagePigeCreate;
    }

    //Get les infos pour courriel dans Java (nom pige, pige description, nom admin, date pige,url et QrCode)


    //One pige by idUser and idPige
    @GetMapping("/getOnePige")
    public Pige getOnePige(@RequestParam int idPige){
        return pigeRepository.findPigeBy(idPige);
    }

    //Update pige
    @PutMapping("/updatePige")
    public Pige updatePige(@RequestBody Pige pigeUpdated, @RequestParam int idPige){
        Pige pige = pigeRepository.findPigeBy(idPige);
        pige.setPigeName(pigeUpdated.getPigeName());
        pige.setPigeType(pigeUpdated.getPigeType());
        pige.setPigeDescription(pigeUpdated.getPigeDescription());
        pige.setPigeEndDate(pigeUpdated.getPigeEndDate());
        pige.setPigeSuggestedMoneyAmount(pigeUpdated.getPigeSuggestedMoneyAmount());
        pige.setPigeImage(pigeUpdated.getPigeImage());
        //pige.setUserAdmin(pigeUpdated.getUserAdmin());  ? On le fait?
        return pigeRepository.save(pige);
    }





}

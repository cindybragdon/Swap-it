package com.swapit.controllers;

import com.swapit.model.Toto;
import com.swapit.model.User;
import com.swapit.repositories.TotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")

public class TotoServerController {

    @Autowired
    private TotoRepository totoRepository;

    // (Verified and tested)
    @PostMapping("/createTotoByEmail")
    public String createTotoByEmail(@RequestBody Toto totoToCreate) throws Exception {

        String messageCreate = "ACK-601";
        try {
            if (totoToCreate.getTotoEmail() != null
                    && totoToCreate.getTotoUsername() != null){
                boolean userExists = totoRepository.existsUserByTotoEmail(totoToCreate.getTotoEmail());
                if (userExists) {
                    messageCreate = "ACK-602";
                } else {
                    totoRepository.save(totoToCreate);
                    messageCreate = "ACK-600";
                }
            }
            return messageCreate;
        } catch (Exception e) {
            return messageCreate + e.getMessage();
        }
    }

    //Update user account (update) (Verified and tested)
    @PutMapping("/updateTotoById")
    public String updateTotoById(@RequestBody Toto totoUpdated, @RequestParam int idToto) throws Exception {
        String messageUpdate = "ACK-611";
        try {
            if (totoUpdated.getTotoEmail() != null
                    && totoUpdated.getTotoUsername() != null) {
                boolean idTotoExists = totoRepository.existsByIdToto(idToto);
                boolean totoEmailExists = totoRepository.existsUserByTotoEmail(totoUpdated.getTotoEmail());
                boolean totoEmailExistsButIsTheRightToto = totoRepository.existsByIdTotoAndTotoEmail(idToto, totoUpdated.getTotoEmail());
                if (idTotoExists) {
                    if (!totoEmailExists || totoEmailExistsButIsTheRightToto) {
                        Toto toto = totoRepository.findTotoByIdToto(idToto);
                        toto.setTotoUsername(totoUpdated.getTotoUsername());
                        toto.setTotoEmail(totoUpdated.getTotoEmail());
                        totoRepository.save(toto);
                        messageUpdate = "ACK-610";
                    }
                }
            }
        } catch (Exception e) {
            return messageUpdate + e.getMessage();
        }
        return messageUpdate;
    }


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

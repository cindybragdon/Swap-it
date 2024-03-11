package com.swapit.controllers;


import com.swapit.model.Shadow;
import com.swapit.model.ShadowToto;
import com.swapit.model.Toto;
import com.swapit.repositories.ShadowTotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")


public class ShadowTotoServerController {

    @Autowired
    private ShadowTotoRepository shadowTotoRepository;

    // (Verified and tested)
    @PostMapping("/createShadowToto")
    public String createShadowToto(@RequestBody ShadowToto shadowTotoToCreate) throws Exception {
        String messageShadowCreated = "ACK-501";
        try {
            if (shadowTotoToCreate.getToto() != null
                    && shadowTotoToCreate.getTotoPassword() != null) {
                shadowTotoRepository.save(shadowTotoToCreate);
                messageShadowCreated = "ACK-500";
            }
            return messageShadowCreated;
        } catch (Exception e) {
            return messageShadowCreated + e.getMessage();
        }
    }

    //Update Password
    @PutMapping("/updateTotoPwdById")
    public String updateTotoPwdById(@RequestBody ShadowToto shadowTotoUpdated) throws Exception {
        String messagePwdUpdated = "ACK-511";
        try {
            if (shadowTotoUpdated.getTotoPassword() != null && shadowTotoUpdated.getToto() != null) {
                ShadowToto shadowToto = shadowTotoRepository.findByIdShadowToto((shadowTotoUpdated.getToto().getIdToto()));
                shadowToto.setTotoPassword(shadowTotoUpdated.getTotoPassword());
                shadowTotoRepository.save(shadowToto);
                messagePwdUpdated = "ACK-510";
            }
            return messagePwdUpdated;
        } catch (Exception e) {
            return messagePwdUpdated + e.getMessage();
        }

    }


}

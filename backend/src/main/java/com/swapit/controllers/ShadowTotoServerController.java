package com.swapit.controllers;



import com.swapit.model.ShadowToto;
import com.swapit.model.Toto;
import com.swapit.repositories.ShadowTotoRepository;
import com.swapit.repositories.TotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")


public class ShadowTotoServerController {

    @Autowired
    private ShadowTotoRepository shadowTotoRepository;

    @Autowired
    private TotoRepository totoRepository;

    // (Verified and tested)
    @PostMapping("/createShadowTotoAndToto")
    public String createShadowTotoAndToto(@RequestBody ShadowToto shadowTotoToCreate) throws Exception {
        String messageShadowTotoAndTotoCreated = "ACK-501";
        try {
            if(shadowTotoToCreate.getToto().getTotoEmail() != null
                    && shadowTotoToCreate.getToto().getTotoUsername() != null
                    && shadowTotoToCreate.getTotoPassword() != null) {


                if (totoRepository.existsByTotoEmail(shadowTotoToCreate.getToto().getTotoEmail())) {
                    messageShadowTotoAndTotoCreated = "ACK-502";
                } else {
                    totoRepository.save(shadowTotoToCreate.getToto());
                    shadowTotoRepository.save(shadowTotoToCreate);
                    messageShadowTotoAndTotoCreated = "ACK-500";
                }

            }
            return messageShadowTotoAndTotoCreated;
        } catch (Exception e) {
            return messageShadowTotoAndTotoCreated + e.getMessage();
        }
    }

    //Update Password
    @PutMapping("/updateShadowTotoAndToto")
    public String updateShadowTotoAndToto(@RequestBody ShadowToto shadowTotoUpdated) throws Exception {
        String messagePwdUpdated = "ACK-511";
        try {
            if (
                shadowTotoUpdated.getToto().getTotoEmail() != null
                && shadowTotoUpdated.getToto().getTotoUsername() != null
                && shadowTotoUpdated.getTotoPassword() != null) {

                if(totoRepository.existsByIdToto(shadowTotoUpdated.getToto().getIdToto())
                && shadowTotoRepository.existsByToto_IdToto(shadowTotoUpdated.getToto().getIdToto())) {

                    ShadowToto shadowToto = shadowTotoRepository.findByToto_IdToto((shadowTotoUpdated.getToto().getIdToto()));
                    boolean totoEmailExists = totoRepository.existsUserByTotoEmail(shadowTotoUpdated.getToto().getTotoEmail());
                    boolean totoEmailExistsButIsTheRightToto = totoRepository.existsByIdTotoAndTotoEmail(shadowTotoUpdated.getToto().getIdToto(), shadowTotoUpdated.getToto().getTotoEmail());

                    if (totoRepository.existsByIdToto(shadowTotoUpdated.getToto().getIdToto())) {
                        if (!totoEmailExists || totoEmailExistsButIsTheRightToto) {
                            Toto toto = totoRepository.findTotoByIdToto(shadowTotoUpdated.getToto().getIdToto());
                            toto.setTotoUsername(shadowTotoUpdated.getToto().getTotoUsername());
                            toto.setTotoEmail(shadowTotoUpdated.getToto().getTotoEmail());
                            shadowToto.setTotoPassword(shadowTotoUpdated.getTotoPassword());
                            totoRepository.save(toto);
                            shadowTotoRepository.save(shadowToto);
                            messagePwdUpdated = "ACK-510";
                        }
                    }
                }


            }
            return messagePwdUpdated;
        } catch (Exception e) {
            return messagePwdUpdated + e.getMessage();
        }

    }


}

package com.swapit.controllers;

import com.swapit.model.*;
import com.swapit.repositories.CoupleRepository;
import com.swapit.repositories.PigeRepository;
import com.swapit.repositories.UserPigeRepository;
import com.swapit.repositories.UserPigeWithUserPickedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")
public class UserPigeWithUserPickedServerController {

    @Autowired
    private UserPigeWithUserPickedRepository userPigeWithUserPickedRepository;

    @Autowired
    private UserPigeRepository userPigeRepository;

    @Autowired
    private CoupleRepository coupleRepository;
    @Autowired
    private PigeRepository pigeRepository;


    @GetMapping("/getWhoAsBeenPickedByIdUserPige")
    public UserPigeWithUserPicked getWhoAsBeenPickedByIdUserPige(@RequestParam int idUserPige) throws Exception {
        try {
            return userPigeWithUserPickedRepository.findByUserPigeWhoPickedTheOtherUserPige_IdUserPige(idUserPige);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }

    }
    // (Verified and tested)
    @PostMapping("/createUserPigeWithUserPicked")
    public String createUserPigeWithUserPicked(@RequestBody UserPigeWithUserPicked userPigeWithUserPickedToCreate) throws Exception{
        String messageCreate = "ACK-101";
        try {
            if (userPigeWithUserPickedToCreate.getUserPigeWhoPickedTheOtherUserPige() != null
            && userPigeWithUserPickedToCreate.getUserPigeWhoIsPickedByTheUserPige() != null) {
                UserPige testFirstUserPicked = userPigeRepository.findByIdUserPige(userPigeWithUserPickedToCreate.getUserPigeWhoPickedTheOtherUserPige().getIdUserPige());
                UserPige testSecondUserPicked = userPigeRepository.findByIdUserPige(userPigeWithUserPickedToCreate.getUserPigeWhoIsPickedByTheUserPige().getIdUserPige());

                if (testFirstUserPicked.getPige().equals(testSecondUserPicked.getPige())) {
                    if (!userPigeWithUserPickedToCreate.getUserPigeWhoPickedTheOtherUserPige().equals(userPigeWithUserPickedToCreate.getUserPigeWhoIsPickedByTheUserPige())) {
                        if (!userPigeWithUserPickedRepository.existsByUserPigeWhoIsPickedByTheUserPige(testFirstUserPicked)) {
                            if (!userPigeWithUserPickedRepository.existsByUserPigeWhoPickedTheOtherUserPige(testSecondUserPicked)) {
                                userPigeWithUserPickedRepository.save(userPigeWithUserPickedToCreate);
                                messageCreate = "ACK-100";
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



    @PostMapping("/createAllUserPigeWithUserPickedForPige")
    public String createAllUserPigeWithUserPickedForPige(@RequestParam int idPige) throws Exception{
        String messageCreate = "ACK-101";
        Pige pigeToUpdate = pigeRepository.findPigeByIdPige(idPige);
        ArrayList<UserPige> listUserPige = new ArrayList<>(userPigeRepository.findAllByPige_IdPige(idPige));
        ArrayList<UserPigeWithUserPicked> listUserPigePicked = new ArrayList<>();
        ArrayList<Integer> listOfIdsAlreadyPicked = new ArrayList<>();
        int max = listUserPige.size()-1;
        int min = 0;
        int range = max - min + 1;
        int comptor = 0;
        int numberOfTriesOfUserPigePicked = 0;

        try {
            if (!listUserPige.isEmpty() && listUserPige.size() >= 3) {
                while (comptor < listUserPige.size()) {
                    System.out.println(comptor);
                    int randomUserInt = (int) (Math.random() * range) + min;


                    if (comptor != randomUserInt) {
                        if (!listOfIdsAlreadyPicked.contains(randomUserInt)) {
                            UserPige userWhoPickedTheOther = listUserPige.get(comptor);
                            UserPige userPigePicked = listUserPige.get(randomUserInt);
                            if(pigeToUpdate.isCouplesFiltered()) {

                                Couple coupleOfUserPigeByFirst = coupleRepository.findCoupleByFirstConjoint(userWhoPickedTheOther);

                                if ((coupleOfUserPigeByFirst == null) ||
                                        (coupleOfUserPigeByFirst.getSecondConjoint() != userPigePicked)
                                ) {

                                    UserPigeWithUserPicked userPigeWithUserPickedToSave = new UserPigeWithUserPicked();
                                    userPigeWithUserPickedToSave.setUserPigeWhoPickedTheOtherUserPige(userWhoPickedTheOther);
                                    userPigeWithUserPickedToSave.setUserPigeWhoIsPickedByTheUserPige(userPigePicked);
                                    listUserPigePicked.add(userPigeWithUserPickedToSave);
                                    numberOfTriesOfUserPigePicked = 0;
                                    comptor += 1;
                                    listOfIdsAlreadyPicked.add(randomUserInt);
                                } else {
                                    numberOfTriesOfUserPigePicked += 1;

                                }
                            } else {
                                UserPigeWithUserPicked userPigeWithUserPickedToSave = new UserPigeWithUserPicked();
                                userPigeWithUserPickedToSave.setUserPigeWhoPickedTheOtherUserPige(userWhoPickedTheOther);
                                userPigeWithUserPickedToSave.setUserPigeWhoIsPickedByTheUserPige(userPigePicked);
                                listUserPigePicked.add(userPigeWithUserPickedToSave);
                                numberOfTriesOfUserPigePicked = 0;
                                comptor += 1;
                                listOfIdsAlreadyPicked.add(randomUserInt);
                            }


                        } else {
                            numberOfTriesOfUserPigePicked += 1;
                        }

                        if (numberOfTriesOfUserPigePicked >= 20) {
                            comptor = 0;
                            listUserPigePicked = new ArrayList<>();
                        }
                    }

                }

                userPigeWithUserPickedRepository.saveAll(listUserPigePicked);
                pigeToUpdate.setPigeState("STARTED");
                pigeRepository.save(pigeToUpdate);
                messageCreate = "ACK-100";
            }




            return messageCreate;
        } catch (Exception e) {
            return messageCreate + e.getMessage();
        }

    }
    // (Verified and tested)
    @PutMapping("/updateUserPickedByIdUserPigePicked")
    public String updateUserPickedByIdUserPigePicked (@RequestParam int idUserPigePicked, @RequestBody UserPigeWithUserPicked userPigeWithUserPickedUpdated) throws Exception {
        String messageUpdate = "ACK-011";
        try{
            if (userPigeWithUserPickedUpdated.getUserPigeWhoPickedTheOtherUserPige() != null
                    && userPigeWithUserPickedUpdated.getUserPigeWhoIsPickedByTheUserPige() != null) {
                UserPigeWithUserPicked userPigeWithUserPickedToUpdate = userPigeWithUserPickedRepository.findByIdUserPigeWithUserPigePicked(idUserPigePicked);
                UserPige testFirstUserPicked = userPigeRepository.findByIdUserPige(userPigeWithUserPickedUpdated.getUserPigeWhoPickedTheOtherUserPige().getIdUserPige());
                UserPige testSecondUserPicked = userPigeRepository.findByIdUserPige(userPigeWithUserPickedUpdated.getUserPigeWhoIsPickedByTheUserPige().getIdUserPige());

                if (testFirstUserPicked.getPige().equals(testSecondUserPicked.getPige())) {
                    if (!userPigeWithUserPickedRepository.existsByUserPigeWhoIsPickedByTheUserPige(testFirstUserPicked)) {
                        if (!userPigeWithUserPickedRepository.existsByUserPigeWhoPickedTheOtherUserPige(testSecondUserPicked)) {
                            if (!userPigeWithUserPickedUpdated.getUserPigeWhoPickedTheOtherUserPige().equals(userPigeWithUserPickedUpdated.getUserPigeWhoIsPickedByTheUserPige())) {
                                userPigeWithUserPickedToUpdate.setUserPigeWhoPickedTheOtherUserPige(userPigeWithUserPickedUpdated.getUserPigeWhoPickedTheOtherUserPige());
                                userPigeWithUserPickedToUpdate.setUserPigeWhoIsPickedByTheUserPige(userPigeWithUserPickedUpdated.getUserPigeWhoIsPickedByTheUserPige());
                                userPigeWithUserPickedRepository.save(userPigeWithUserPickedToUpdate);
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
}

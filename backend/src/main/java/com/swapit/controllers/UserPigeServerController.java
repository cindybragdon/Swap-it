package com.swapit.controllers;

import com.swapit.model.Pige;
import com.swapit.model.UserPige;
import com.swapit.repositories.UserPigeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")
public class UserPigeServerController {

    @Autowired
    private UserPigeRepository userPigeRepository;

    //Get all the piges from one user
    @GetMapping("/getListUserPigeFromIdUser")
    public List<UserPige> getListUserPigeFromIdUser(int idUser) throws Exception {
        try {
            return userPigeRepository.findAllByUser_IdUser(idUser);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }

    }

    @GetMapping("/getInfoUserPigeByIdUserAndIdPige")
    public UserPige getInfoUserPigeByIdUserAndIdPige(int idUser, int idPige) throws Exception {
        try {
            return userPigeRepository.findByUser_IdUserAndPige_IdPige(idUser, idPige);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
}

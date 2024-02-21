package com.swapit.controllers;

import com.swapit.model.User;
import com.swapit.repositories.ShadowRepository;
import com.swapit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5555")
@RequestMapping("/api")
public class UserServerController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ShadowRepository shadowRepository;


    @GetMapping("/getAllUsers")
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @GetMapping("/getUserIdByEmail")
    public ResponseEntity<Integer> getUserByEmail(@RequestParam String email) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            return ResponseEntity.ok(user.getIdUser());
        } else {
            return ResponseEntity.notFound().build();

        }
    }
/**
    // ici je veux passser getUserIdByEmail en parametre
    @GetMapping("/getUserPassById")
    public ResponseEntity<String> getUserPassById(@RequestParam String path) {
        return null;
    }
*/

    // NE FONCTIONNE PAS
    // vérifier si la combinaison userEmail et userPassword existe
    // Comment passer les 2 en param? Je crois qu'on ne peut pas caster 2 repositories dans la meme requete
    @GetMapping("/getByEmailPass")
    public User getUserByUserEmailAndUserPassword(@RequestParam String email, @RequestParam  String password) {
        return userRepository.findUserByUserEmailAndUserPassword(email, password);
    }


}

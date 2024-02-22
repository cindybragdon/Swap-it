package com.swapit.controllers;

import com.swapit.model.User;
import com.swapit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5555")
@RequestMapping("/api")
public class UserServerController {

    @Autowired
    private UserRepository userRepository;


    //List of all users (select)
    @GetMapping("/getAllUsers")
    public List<User> getAll() {
        return userRepository.findAll();
    }


    //Vefify if the email / password exists for account connection or forgot pwd (select)
    @GetMapping("/getByEmailPass")
    public User getUserByEmailAndPassword(@RequestParam String email, @RequestParam  String password) {
        return userRepository.findUserByUserEmail(email, password);
    }

    // pas ok
    /*
    @GetMapping("/getIdByEmail")
    public User getIdByEmail(@RequestParam String userEmail) {
        return userRepository.findBy(userEmail);
    }
    */
     /*

    //Create account (insert)
    //Placer le commentaire ci apres dans serviceUser
    /**public User createUser(User user) {
        return userRepository.save(user);}
    */
    @PostMapping("/createUser")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    //Update user account (update)
    /*
    @PutMapping("/updateUser")
    public User updateUser(@RequestBody User user) {
        return userRepository.
    }
    */


}

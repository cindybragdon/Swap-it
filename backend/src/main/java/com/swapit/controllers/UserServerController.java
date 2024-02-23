package com.swapit.controllers;

import com.swapit.model.User;
import com.swapit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")

public class UserServerController {

    @Autowired
    private UserRepository userRepository;


    //List of all users (select)
    @GetMapping("/getAllUsers")
    public List<User> getAll() {
        return userRepository.findAll();
    }

    //Find User by email
    @GetMapping("/getUserByEmail")
    public User getUserByEmail(@RequestParam String email) {

        return userRepository.findUserByUserEmail(email);
    }

    //Create user
    @PostMapping("/createUser")
    public String createUser(@RequestBody User userToCreate) {
        User user = userRepository.findUserByUserEmail(userToCreate.getUserEmail());
        String messageExists = "L'utilisateur existe deja";
        String messageUserCreated = "Votre compte a été créé!";
        if(userRepository.existsByUserEmail(user)) {
            return messageExists;
        }else{
            userRepository.save(user);
            return messageUserCreated;
        }
    }


    //Est-ce qu'on garde le update user by id (qui n'est pas donné dans le body) ou par email??
    //Choisir entre les deux prochaines methodes.
    //Update user account (update)
    @PutMapping("/updateUser")
    public User updateUser(@RequestBody User userUpdated, String userEmail) {
        User user = userRepository.findUserByUserEmail(userEmail);
        user.setUserFirstName(userUpdated.getUserFirstName());
        user.setUserLastName(userUpdated.getUserLastName());
        user.setUserEmail(userUpdated.getUserEmail());
        user.setUserPhone(userUpdated.getUserPhone());
        return userRepository.save(user);
    }

    @PutMapping("/updateUserById")
    public User updateUserById(@RequestBody User userUpdated, int idUser) {
        User user = userRepository.findUserByIdUser(idUser);
        user.setUserFirstName(userUpdated.getUserFirstName());
        user.setUserLastName(userUpdated.getUserLastName());
        user.setUserEmail(userUpdated.getUserEmail());
        user.setUserPhone(userUpdated.getUserPhone());
        return userRepository.save(user);
    }


}

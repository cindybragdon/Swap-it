package com.swapit.controllers;

import com.swapit.model.User;
import com.swapit.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    //Find Id user by email
    //Find about all from a user by its id
    @GetMapping("/getIdByEmail")
    public Integer getIdByEmail(@RequestBody String userEmail) {
        User user =userRepository.findUserByUserEmail(userEmail);
        return user.getIdUser();
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
        String messageExists = "L'utilisateur existe deja, connectez-vous!";
        String messageUserCreated = "Votre compte a été créé!";
        if(userRepository.existsByUserEmail(user)) {
            return messageExists;
        }else{
            userRepository.save(userToCreate);
            return messageUserCreated;
        }
    }

    //Create user
    @PostMapping("/createUser")
    public ResponseEntity<String> createUser2(@RequestBody User userToCreate) {
            boolean userExists = userRepository.existsByUserEmail(userToCreate);
            if (userExists) {
                return ResponseEntity.ok("L'utilisateur existe deja, connectez-vous!");
            } else {
                userRepository.save(userToCreate);
                return ResponseEntity.ok("Votre compte a été créé!");
                // ResponseStatus(HttpStatus.CREATED, "Votre compte a été créé!");
                //throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
            }
        }


    //Update user account (update)
    @PutMapping("/updateUserById")
    public User updateUserById(@RequestBody User userUpdated, @RequestParam int idUser) {
        User user = userRepository.findUserByIdUser(idUser);
        user.setUserFirstName(userUpdated.getUserFirstName());
        user.setUserLastName(userUpdated.getUserLastName());
        user.setUserEmail(userUpdated.getUserEmail());
        user.setUserPhone(userUpdated.getUserPhone());
        return userRepository.save(user);
    }


}

package com.swapit.repositories;

import com.swapit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

    public List<User> findAll();

    public User findUserByUserEmail (String userEmail);

    //public User createUser(@RequestBody User user);

    // public User findByEmail(@RequestParam String email);
    //public User updateUser(@RequestBody User user);


}



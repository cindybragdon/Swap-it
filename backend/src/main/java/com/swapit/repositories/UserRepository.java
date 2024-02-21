package com.swapit.repositories;

import com.swapit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    public User findUserByUserEmailAndUserPassword (String userEmail, String password);

    public User findByEmail(String email);
}



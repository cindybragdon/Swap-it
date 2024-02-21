package com.swapit.repositories;

import com.swapit.model.Shadow;
import com.swapit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShadowRepository extends JpaRepository<Shadow, Integer> {
    public User findUserByUserEmailAndUserPassword (String userEmail, String password);


}

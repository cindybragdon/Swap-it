package com.swapit.repositories;

import com.swapit.model.User;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

    public Boolean existsUserByUserEmail(String email);

    public Boolean existsUserByIdUser(int idUser);

    public User findUserByUserEmail(String userEmail);

    public User findUserByIdUser(int idUser);
    


}



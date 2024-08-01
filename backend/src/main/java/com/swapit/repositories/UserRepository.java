package com.swapit.repositories;

import com.swapit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    public Boolean existsByUserEmail(String email);

    public Boolean existsByIdUser(int idUser);

    public Boolean existsByIdUserAndUserEmail(int idUser, String userEmail);

    public User findByUserEmail(String userEmail);

    public User findByIdUser(int idUser);
    


}



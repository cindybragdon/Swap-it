package com.swapit.repositories;

import com.swapit.model.Pige;
import com.swapit.model.User;
import com.swapit.model.UserPige;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserPigeRepository extends JpaRepository<UserPige, Integer> {

    //Trouver toutes les piges d'un User (avec son pseudo et tout)
    public List<UserPige> findAllByUser_IdUser(int idUser);

    public List<UserPige> findAllByPige_IdPige(int idPige);


    //Trouver les infos d'un User avec une pige spécifique (avec son pseudo et tout)
    public UserPige findUserPigeByUser_UserEmailAndPige_IdPige(String emailUser, int idPige);

    public boolean existsUserPigeByUser_IdUserAndPige_IdPige(int idUser, int idPige);

    public UserPige findByIdUserPige(int idUserPige);

}

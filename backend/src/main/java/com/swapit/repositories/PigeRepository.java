package com.swapit.repositories;

import com.swapit.model.Pige;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PigeRepository extends JpaRepository<Pige, Integer> {

    public Pige findPigeByIdPige(Integer idPige);

    public Pige findPigeByNumberPigeOfUser(int numberPigeOfUser);

    public int countPigesByUserAdmin_IdUser(int idUser);


}

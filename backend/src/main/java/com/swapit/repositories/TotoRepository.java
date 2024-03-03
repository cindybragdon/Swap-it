package com.swapit.repositories;

import com.swapit.model.Toto;
import com.swapit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TotoRepository extends JpaRepository<Toto, Integer> {

    public Boolean existsUserByTotoEmail(String totoEmail);

    public Boolean existsByIdToto(int idToto);

    public Toto findTotoByTotoEmail(String totoEmail);

    public Toto findTotoByIdToto(int idToto);

}
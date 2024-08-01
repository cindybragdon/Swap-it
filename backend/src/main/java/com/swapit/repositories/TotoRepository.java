package com.swapit.repositories;

import com.swapit.model.Toto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TotoRepository extends JpaRepository<Toto, Integer> {

    public Boolean existsUserByTotoEmail(String totoEmail);

    public Boolean existsByIdToto(int idToto);

    public Boolean existsByTotoEmail(String totoEmail);

    public Boolean existsByIdTotoAndTotoEmail(int idToto, String totoEmail);

    public Toto findTotoByTotoEmail(String totoEmail);

    public Toto findTotoByIdToto(int idToto);

}
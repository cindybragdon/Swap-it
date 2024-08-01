package com.swapit.repositories;

import com.swapit.model.ShadowToto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShadowTotoRepository extends JpaRepository<ShadowToto, Integer> {

    //Verifies if the email / password combination exists for account connection or forgot pwd (select)
    public ShadowToto findShadowTotoByIdShadowTotoAndAndTotoPassword(int idShadowToto, String password);


    public ShadowToto findByToto_IdToto(int idShadowToto);

    public boolean existsByToto_IdToto(int idToto);
}

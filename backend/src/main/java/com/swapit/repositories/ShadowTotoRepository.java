package com.swapit.repositories;

import com.swapit.model.Shadow;
import com.swapit.model.ShadowToto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShadowTotoRepository extends JpaRepository<ShadowToto, Integer> {

    //Verifies if the email / password combination exists for account connection or forgot pwd (select)
    public ShadowToto findShadowTotoByIdShadowTotoAndAndTotoPassword(int idShadowToto, String password);


    public ShadowToto findByIdShadowToto(int idShadowToto);
}

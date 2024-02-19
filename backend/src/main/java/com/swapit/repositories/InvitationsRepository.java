package com.swapit.repositories;

import com.swapit.model.Invitatons;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvitationsRepository extends JpaRepository<Invitatons, Integer> {

    //exemple :
    public void findByIdInvitation();
}

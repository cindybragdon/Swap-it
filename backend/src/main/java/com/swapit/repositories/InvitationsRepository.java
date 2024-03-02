package com.swapit.repositories;

import com.swapit.model.Invitations;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvitationsRepository extends JpaRepository<Invitations, Integer> {

    //exemple :
    public void findByIdInvitation(int idInvitation);

    public int findByPige_IdPige(int idpige);
}

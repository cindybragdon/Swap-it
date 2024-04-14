package com.swapit.repositories;

import com.swapit.model.Invitations;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InvitationsRepository extends JpaRepository<Invitations, Integer> {

    //exemple :
    public Invitations findByIdInvitation(int idInvitation);

    public int findByPige_IdPige(int idpige);

    public List<Invitations> findAllByEmailWantedUser(String emailWantedUser);

    public List<Invitations> findAllByIdWantedUser(int idWantedUser);
}

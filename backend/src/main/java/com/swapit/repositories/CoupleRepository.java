package com.swapit.repositories;

import com.swapit.model.Couple;
import com.swapit.model.Pige;
import com.swapit.model.UserPige;
import com.swapit.model.UserPigeWithUserPicked;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoupleRepository extends JpaRepository<Couple, Integer> {

public Couple findByFirstConjointAndSecondConjointAndFirstConjoint_User_IdUserAndFirstConjoint_Pige(UserPige firstConjoint, UserPige secondConjoint, int idOfUserSearched, Pige pigeToLookInto);

public Couple findByIdCouple(Integer idCouple);

}

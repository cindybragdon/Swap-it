package com.swapit.repositories;

import com.swapit.model.Couple;
import com.swapit.model.Pige;
import com.swapit.model.UserPige;
import com.swapit.model.UserPigeWithUserPicked;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CoupleRepository extends JpaRepository<Couple, Integer> {

    public Couple findCoupleByFirstConjointOrSecondConjoint(UserPige userPige, UserPige sameUserPige);

    public Couple findByIdCouple(Integer idCouple);

    public Couple findCoupleByFirstConjoint(UserPige firstConjoint);

    public Couple findCoupleBySecondConjoint(UserPige secondConjoint);

    public List<Couple> findCouplesByFirstConjoint_Pige_IdPige(int idPigeToFindAllCouple);


    public boolean existsByFirstConjoint(UserPige firstConjoint);
    public boolean existsBySecondConjoint(UserPige secondConjoint);



}

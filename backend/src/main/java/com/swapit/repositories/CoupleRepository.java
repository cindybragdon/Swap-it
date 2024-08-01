package com.swapit.repositories;

import com.swapit.model.Couple;
import com.swapit.model.UserPige;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CoupleRepository extends JpaRepository<Couple, Integer> {

    public boolean existsCoupleByFirstConjointAndSecondConjointOrSecondConjointAndFirstConjoint(UserPige conjoint1, UserPige conjoint2, UserPige conjoint1Same, UserPige conjoint2Same);

    public Couple findByIdCouple(Integer idCouple);

    public Couple findCoupleByFirstConjoint(UserPige firstConjoint);

    public Couple findCoupleBySecondConjoint(UserPige secondConjoint);

    public List<Couple> findCouplesByFirstConjoint_Pige_IdPige(int idPigeToFindAllCouple);


    public boolean existsByFirstConjointOrSecondConjoint(UserPige conjoint, UserPige sameConjoint);




}

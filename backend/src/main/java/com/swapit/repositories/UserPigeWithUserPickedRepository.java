package com.swapit.repositories;

import com.swapit.model.UserPige;
import com.swapit.model.UserPigeWithUserPicked;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserPigeWithUserPickedRepository extends JpaRepository<UserPigeWithUserPicked, Integer> {

    public UserPigeWithUserPicked findByIdUserPigeWithUserPigePicked(int idUserPigeWithUserPigePicked);
    public boolean existsByUserPigeWhoPickedTheOtherUserPige(UserPige userPigeWhoPickedTheOther);
    public boolean existsByUserPigeWhoIsPickedByTheUserPige(UserPige userPigeWhoIsPickedByTheOther);

}

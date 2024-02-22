package com.swapit.repositories;

import com.swapit.model.UserPige;
import com.swapit.model.WishedItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WishedItemRepository extends JpaRepository<WishedItem, Integer> {

    //Montre tout les éléments d'un UserPige spécifique (donc la liste d'un UserPige)
    public List<WishedItem> findAllByIdUserPige(UserPige userPige);

    public WishedItem findByIdUserPigeAndIdWishedItem(UserPige userPige, WishedItem wishedItem);
}

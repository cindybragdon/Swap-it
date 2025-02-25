package com.swapit.repositories;

import com.swapit.model.WishedItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WishedItemRepository extends JpaRepository<WishedItem, Integer> {

    public List<WishedItem> findAllByUserPige_IdUserPige(int idUserPige);


    public WishedItem findByIdWishedItem(Integer idWishedItem);


}

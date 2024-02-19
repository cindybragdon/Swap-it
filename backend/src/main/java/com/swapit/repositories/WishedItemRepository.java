package com.swapit.repositories;

import com.swapit.model.WishedItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WishedItemRepository extends JpaRepository<WishedItem, Integer> {
}

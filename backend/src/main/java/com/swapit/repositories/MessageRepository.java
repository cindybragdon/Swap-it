package com.swapit.repositories;


import com.swapit.model.Message;
import com.swapit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Integer> {

    public List<Message> findAllByIsAnonymousAndTopicAndUserPige1_IdUserPigeAndUserPige2_IdUserPigeOrUserPige2_IdUserPigeAndUserPige1_IdUserPigeAndIsAnonymousAndTopic(boolean isAnonymous, String topic, int idUser1, int idUser2, int idUser1same, int idUser2same,boolean isAnonymousSame, String topicSame);

}

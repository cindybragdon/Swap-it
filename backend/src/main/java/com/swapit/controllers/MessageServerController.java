package com.swapit.controllers;

import com.swapit.model.Message;
import com.swapit.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")

public class MessageServerController {

    @Autowired
    private MessageRepository messageRepository;


    //Create user (Verified and tested)
    @PostMapping("/createMessage")
    public String createMessage(@RequestBody Message messageToCreate) throws Exception {

        String messageCreate = "ACK-1001";
        try {

            if (messageToCreate.getMessage() != null
                    && messageToCreate.getUserPige1() != null
                    && messageToCreate.getUserPige2() != null){

                Date date = new Date();
                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String currentDateTime = dateFormat.format(date);
                messageToCreate.setSendTime(Timestamp.valueOf(currentDateTime));
                messageToCreate.setRead(false);
                messageRepository.save(messageToCreate);
                messageCreate = "ACK-1000";
            }
            return messageCreate;
        } catch (Exception e) {
            return messageCreate + e.getMessage();
        }
    }

    //Get all the piges from one user (Verified and tested)
    @GetMapping("/getAllMessagesConvo")
    public List<Message> getAllMessagesConvo(@RequestParam int idUser1, int idUser2, boolean isAnonymous, String topic) throws Exception {
        try {
            return messageRepository.findAllByIsAnonymousAndTopicAndUserPige1_IdUserPigeAndUserPige2_IdUserPigeOrUserPige2_IdUserPigeAndUserPige1_IdUserPigeAndIsAnonymousAndTopic(isAnonymous, topic, idUser1, idUser2, idUser1, idUser2, isAnonymous, topic);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }

    }

}

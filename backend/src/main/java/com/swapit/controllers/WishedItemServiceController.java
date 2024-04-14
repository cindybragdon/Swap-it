package com.swapit.controllers;

import com.swapit.model.WishedItem;
import com.swapit.repositories.UserRepository;
import com.swapit.repositories.WishedItemRepository;
import org.hibernate.sql.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")

public class WishedItemServiceController {

    @Autowired
    private WishedItemRepository wishedItemRepository;

    @GetMapping("/getOneItem")
    public WishedItem getOneWishedItem(@RequestParam int idWishedItem) throws Exception {
        try {
            return wishedItemRepository.findByIdWishedItem(idWishedItem);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @GetMapping("/getAllWishedItemsFromUserPige")
    public List<WishedItem> getAllWishedItemsFromUserPige(@RequestParam int idUserPige) throws Exception {
        try {
            return wishedItemRepository.findAllByUserPige_IdUserPige(idUserPige);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    //Create a wished item in a list
    //(Verified and tested)
    @PostMapping("/createWishedItem")
    public String createWishedItem(@RequestBody WishedItem wishedItemToCreate) throws Exception {
        String messageWishItemCreated = "ACK-901";
        try {
            if (wishedItemToCreate.getWishedItemName() != null
                && wishedItemToCreate.getUserPige() != null
                && wishedItemToCreate.getUserWhoAddedTheItem() != null){
                wishedItemRepository.save(wishedItemToCreate);
                messageWishItemCreated = "ACK-900";
            }
        } catch (Exception e) {
            return messageWishItemCreated + e.getMessage();
        }
        return messageWishItemCreated;
    }

    //(Verified and tested)
    @PutMapping("/updateWishedItem")
    public String updateWishedItem(@RequestBody WishedItem wishedItemToUpdate, @RequestParam int idWishedItem) throws Exception {
        String messageWishedItemUpdated = "ACK-911";
        try {
            boolean wishedItemExists = wishedItemRepository.existsById(idWishedItem);
            if (wishedItemExists) {
                if (wishedItemToUpdate.getWishedItemName() != null
                        && wishedItemToUpdate.getUserPige() != null) {
                    WishedItem wishedItem = wishedItemRepository.findByIdWishedItem(idWishedItem);
                    wishedItem.setWishedItemName(wishedItemToUpdate.getWishedItemName());
                    wishedItem.setWishedItemDescription(wishedItemToUpdate.getWishedItemDescription());
                    wishedItem.setWishedItemUrl(wishedItemToUpdate.getWishedItemUrl());
                    wishedItem.setWishedItemImage(wishedItemToUpdate.getWishedItemImage());
                    wishedItemRepository.save(wishedItem);
                    messageWishedItemUpdated = "ACK-910";
                }
            }
            return messageWishedItemUpdated;
        } catch (Exception e) {
            return messageWishedItemUpdated + e.getMessage();
        }
    }

    //(Verified and tested)
    @PutMapping("/deleteWishedItem")
    public String deleteWishedItem(@RequestParam int idWishedItem) throws Exception {
        String messageWishedItemUpdated = "ACK-911";
        try {
            boolean wishedItemExists = wishedItemRepository.existsById(idWishedItem);
            if (wishedItemExists) {
                WishedItem wishedItem = wishedItemRepository.findByIdWishedItem(idWishedItem);
                wishedItem.setDeleted(true);
                wishedItemRepository.save(wishedItem);
                messageWishedItemUpdated = "ACK-910";
            }
            return messageWishedItemUpdated;
        } catch (Exception e) {
            return messageWishedItemUpdated + e.getMessage();
        }
    }



}


package com.swapit.controllers;

import com.swapit.model.WishedItem;
import com.swapit.repositories.UserRepository;
import com.swapit.repositories.WishedItemRepository;
import org.hibernate.sql.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")

public class WishedItemServiceController {

    @Autowired
    private WishedItemRepository wishedItemRepository;

    @GetMapping("/getOneItem/{idWishedItem}")
    public WishedItem getOneWishedItem(@PathVariable int idWishedItem) {
        boolean wishedItemExists = wishedItemRepository.existsById(idWishedItem);
        if (wishedItemExists) {
            return wishedItemRepository.findByIdWishedItem(idWishedItem);
        }else{
            return null;
        }
    }

    //Create a wished item in a list
    @PostMapping("/createWishedItem")
    public String createWishedItem(@RequestBody WishedItem wishedItemToCreate, @RequestParam int idUserPige) {
        String messageWishItemCreated = "ACK-901";
        try {
            wishedItemRepository.save(wishedItemToCreate);
            messageWishItemCreated = "ACK-900";
        } catch (Exception e) {
            return messageWishItemCreated + e.getMessage();
        }
        return messageWishItemCreated;
    }

    @PutMapping("/updateWishedItem")
    public String updateWishedItem(@RequestBody WishedItem wishedItemToUpdate, @RequestParam int idUserPige, int idWishedItem) {
        String messageWishedItemUpdated = "ACK-911";
        boolean wishedItemExists = wishedItemRepository.existsById(idWishedItem);
        if (wishedItemExists) {
            WishedItem wishedItem = wishedItemRepository.findByIdWishedItem(idWishedItem);
            wishedItem.setWishedItemName(wishedItemToUpdate.getWishedItemName());
            wishedItem.setWishedItemDescription(wishedItemToUpdate.getWishedItemDescription());
            wishedItem.setWishedItemUrl(wishedItemToUpdate.getWishedItemUrl());
            wishedItem.setWishedItemImage(wishedItemToUpdate.getWishedItemImage());
            wishedItemRepository.save(wishedItem);
            return messageWishedItemUpdated = "ACK-910";
        } else {
            return messageWishedItemUpdated;
        }
    }

    @DeleteMapping("{idWishedItem}")
    public String deleteWishedItem(@PathVariable int idWishedItem) {
        String messageDeleteItem = "ACK-921";
        boolean wishedItemExists = wishedItemRepository.existsById(idWishedItem);
        if (wishedItemExists) {
            wishedItemRepository.delete(idWishedItem);
            messageDeleteItem = "ACK-920";
        }else {
           return messageDeleteItem = "ACK-922";
        }
        return messageDeleteItem;
    }


    }


package com.swapit.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class WishedItem implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idWishedItem;

    @ManyToOne
    private UserPige userPige;

    @ManyToOne
    private User userWhoAddedTheItem;

    private String wishedItemName;
    private String wishedItemDescription;
    private String wishedItemUrl;

    private String wishedItemImage;

    private boolean isDeleted;
}

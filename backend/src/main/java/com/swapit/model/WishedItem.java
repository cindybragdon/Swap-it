package com.swapit.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class WishedItem implements Serializable {

    @Id
    @GeneratedValue
    private int idWishedItem;

    @OneToOne
    private UserPige idUserPige;

    private String wishedItemName;
    private String wishedItemDescription;
    private String wishedItemUrl;

    private byte[] wishedItemImage;
}

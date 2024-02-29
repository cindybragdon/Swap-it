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

    @OneToOne
    private UserPige idUserPige;

    private String wishedItemName;
    private String wishedItemDescription;
    private String wishedItemUrl;

    private byte[] wishedItemImage;
}

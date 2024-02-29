package com.swapit.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class UserPige implements Serializable {

    @Id
    @GeneratedValue
    private int idUserPige;

    @ManyToOne
    private Pige pige;

    @ManyToOne
    private User user;

    private String userPigePseudo;

    private byte[] userPigeImage;

}

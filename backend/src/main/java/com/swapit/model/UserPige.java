package com.swapit.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class UserPige implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idUserPige;

    @ManyToOne
    private Pige pige;

    @ManyToOne
    private User user;

    private String userPigePseudo;

    private String userPigeImage;

}

package com.swapit.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class UserPigeWithUserPicked implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idUserPigeWithUserPigePicked;

    @OneToOne
    private UserPige userPigeWhoPickedTheOtherUserPige;

    @OneToOne
    private UserPige userPigeWhoIsPickedByTheUserPige;

}

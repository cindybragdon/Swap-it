package com.swapit.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class UserPigeWithUserPicked implements Serializable {

    @Id
    @GeneratedValue
    private int idUserPigeWithUserPigePicked;

    @OneToOne
    private UserPige userPigeWhoPickedTheOtherUserPige;

    @OneToOne
    private UserPige userPigeWhoIsPickedByTheUserPige;

}

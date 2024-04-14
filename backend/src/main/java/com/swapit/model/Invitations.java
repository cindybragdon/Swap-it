package com.swapit.model;
// jjhggg
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class Invitations implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idInvitation;
    
    @ManyToOne
    private Pige pige;

    private String firstNameOfWantedUser;

    private String lastNameOfWantedUser;

    private String emailWantedUser;

    private boolean asBeenAnswered;
}

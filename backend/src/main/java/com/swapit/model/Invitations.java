package com.swapit.model;
// jjhggg
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class Invitations implements Serializable {

    @Id
    @GeneratedValue
    private int idInvitation;
    
    @ManyToOne
    private Pige idPige;

    private String emailWantedUser;
}

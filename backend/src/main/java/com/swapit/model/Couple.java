package com.swapit.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Couple {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idCouple;

    @OneToOne
    private UserPige firstConjoint;

    @OneToOne
    private UserPige secondConjoint;

}

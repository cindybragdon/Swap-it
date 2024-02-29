package com.swapit.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Conjoint {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idConjoint;

    @OneToOne
    private UserPige firstConjoint;

    @OneToOne
    private UserPige secondConjoint;

}

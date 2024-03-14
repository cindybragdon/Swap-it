package com.swapit.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class Couple implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idCouple;

    @OneToOne
    private UserPige firstConjoint;

    @OneToOne
    private UserPige secondConjoint;

}

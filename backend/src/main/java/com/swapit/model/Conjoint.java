package com.swapit.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Conjoint {
    @Id
    @GeneratedValue
    private int idConjoint;

    @OneToOne
    private User firstConjoint;

    @OneToOne
    private User secondConjoint;

}

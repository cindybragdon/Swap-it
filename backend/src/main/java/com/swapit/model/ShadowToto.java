package com.swapit.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class ShadowToto implements Serializable {

    @Id
    @GeneratedValue
    private int idShadowToto;

    private String totoPassword;
    private String totoPasswordHash;

    @OneToOne
    private Toto toto;
}

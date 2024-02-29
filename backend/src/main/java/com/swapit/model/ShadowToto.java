package com.swapit.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class ShadowToto implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idShadowToto;

    private String totoPassword;
    private String totoPasswordHash;

    @OneToOne
    private Toto toto;
}

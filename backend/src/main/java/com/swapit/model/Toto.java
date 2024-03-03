package com.swapit.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class Toto implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idToto;

    private String totoUsername;
    private String totoEmail;

    @OneToOne
    private Toto toto;
}

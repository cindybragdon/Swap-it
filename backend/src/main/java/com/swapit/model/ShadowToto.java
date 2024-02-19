package com.swapit.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class ShadowToto implements Serializable {

    @Id
    @GeneratedValue
    private int idToto;

    private String totoPassword;
    private String totoPasswordHash;
}

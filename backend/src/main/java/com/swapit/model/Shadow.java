package com.swapit.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class Shadow implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idShadow;

    private String userPassword;
    private String userPasswordHash;

    @OneToOne
    private User user;

}

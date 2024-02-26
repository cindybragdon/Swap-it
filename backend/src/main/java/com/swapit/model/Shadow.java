package com.swapit.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class Shadow implements Serializable {

    @Id
    @GeneratedValue
    private int idShadow;

    private String userPassword;
    private String userPasswordHash;

    @OneToOne
    private User user;

}

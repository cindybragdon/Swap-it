package com.swapit.model;


import jakarta.persistence.*;
import lombok.Data;


import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Data
public class Pige implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idPige;

    private String pigeName;
    private String pigeType;
    private String pigeDescription;
    private String pigeUrl;
    private Timestamp pigeTimestampCreation;
    private LocalDate pigeEndDate;
    private int pigeSuggestedMoneyAmount;
    private byte[] pigeImage;
    private String qrCodeUrl;
    private byte[] qrCodeImage;
    private String pigeState;

    @OneToOne
    private User userAdmin;
}

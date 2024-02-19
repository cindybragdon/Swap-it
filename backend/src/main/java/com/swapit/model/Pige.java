package com.swapit.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;


import java.io.Serializable;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Data
public class Pige implements Serializable {

    @Id
    @GeneratedValue
    private int idPige;

    private String pigeName;
    private String pigeType;
    private String pigeDescription;
    private String pigeUrl;
    private Timestamp pigeTimestampCreation;
    private Date pigeEndDate;
    private int pigeSuggestedMoneyAmount;
    private byte[] pigeImage;
    private String qrCodeUrl;
    private byte[] qrCodeImage;
    private String pigeState;

    @OneToOne
    private User userAdmin;
}

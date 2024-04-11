package com.swapit.model;


import jakarta.persistence.*;
import lombok.Data;


import java.io.Serializable;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

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
    private Date pigeEndDate;
    private int pigeSuggestedMoneyAmount;
    private String pigeImage;
    private String qrCodeUrl;
    private byte[] qrCodeImage;
    private String pigeState;
    private int numberPigeOfUser;

    @ManyToOne
    private User userAdmin;
}

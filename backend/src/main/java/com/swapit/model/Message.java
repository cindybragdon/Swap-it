package com.swapit.model;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.sql.Timestamp;


@Entity
@Data
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idMessage;

    private Timestamp sendTime;
    private String message;
    private boolean isRead;
    private boolean isAnonymous;
    private String topic;

    @ManyToOne
    private UserPige userPige1;
    @ManyToOne
    private UserPige userPige2;
}

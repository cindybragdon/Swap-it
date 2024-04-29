package com.swapit.controllers;


import com.swapit.model.Shadow;
import com.swapit.model.User;
import com.swapit.repositories.ShadowRepository;
import com.swapit.repositories.UserRepository;

import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;


import javax.mail.MessagingException;

@RestController
@CrossOrigin("http://localhost:5555/")
@RequestMapping("/api")
public class MailController {

    @Autowired
    private JavaMailSender sender;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ShadowRepository shadowRepository;

    @GetMapping("/userPwdRecovery")
    public String sendMail(@RequestParam int idUser) {
        /*
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        User u = userRepository.findUserByIdUser(idUser);

        try {

            if(u != null) {
                Shadow shadow = shadowRepository.findByUser_IdUser(u.getIdUser());
                helper.setTo(u.getUserEmail());
                helper.setText("Ton PWD: "+ shadow.getUserPassword());
                helper.setSubject("Password Recovery");
                sender.send(message);
            }

        } catch (MessagingException e) {
            e.printStackTrace();
            return "Error while sending mail ..";
        }

        return "Mail Sent Success!";

         */
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        User u = userRepository.findById(idUser)
                .orElseThrow(() -> new RuntimeException());
        try {

            Shadow shadow = shadowRepository.findByUser_IdUser(u.getIdUser());
            helper.setTo(u.getUserEmail());

            helper.setText("Ton PWD: "+ shadow);
            helper.setSubject("Password Recovery");
        } catch (Exception e) {
            e.printStackTrace();
            return "Error while sending mail ..";
        }
        sender.send(message);
        return "Mail Sent Success!";

    }



}

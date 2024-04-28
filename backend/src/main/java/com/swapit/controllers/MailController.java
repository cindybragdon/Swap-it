package com.swapit.controllers;

/**
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@RestController
@CrossOrigin
public class MailController {

    @Autowired
    private JavaMailSender sender;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/userPwdRecovery/{id}")
    public String sendMail(@PathVariable Long id) {
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        User u = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException());
        try {


            helper.setTo(u.getEmail());
            helper.setText("Ton PWD: "+ u.getPasswd());
            helper.setSubject("Password Recovery");
        } catch (MessagingException e) {
            e.printStackTrace();
            return "Error while sending mail ..";
        }
        sender.send(message);
        return "Mail Sent Success!";
    }
}
 **/
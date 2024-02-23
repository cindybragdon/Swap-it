package com.swapit.repositories;

import com.swapit.model.Shadow;
import com.swapit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShadowRepository extends JpaRepository<Shadow, Integer> {



    //Vefify if the email / password exists for account connection or forgot pwd (select)
    public Shadow findByIdUser_UserEmailAndUserPassword(String email,String password);

    public Shadow findByIdUser_UserPhoneAndUserPassword(String phone, String password);


}


package com.example.registration;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RegistrationController {
	
	@GetMapping(value="/")
	 public String homepage(){
        return "index";
    }


}

package com.example.veterinaire;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
/*@ComponentScan({"com.example.veterinaire.services"})
@ComponentScan({"com.example.veterinaire.ServiceImpl"})
@EntityScan({"com.example.veterinaire.models"})*/
public class VeterinaireApplication {

	public static void main(String[] args) {
		SpringApplication.run(VeterinaireApplication.class, args);
	}

}

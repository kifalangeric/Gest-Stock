package com.example.veterinaire.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.veterinaire.models.Consultation;


@Repository
public interface ConsultationRepository extends JpaRepository<Consultation, Integer>{

}
package com.example.veterinaire.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.veterinaire.models.Medicament;



@Repository
public interface MedicamentRepository extends JpaRepository<Medicament, Integer> {

}

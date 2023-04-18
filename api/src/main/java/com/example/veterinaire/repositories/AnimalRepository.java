package com.example.veterinaire.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.veterinaire.models.Animal;


@Repository
public interface AnimalRepository extends JpaRepository<Animal, Integer> {

}

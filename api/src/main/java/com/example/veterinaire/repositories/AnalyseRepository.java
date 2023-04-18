package com.example.veterinaire.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.veterinaire.models.Analyse;


@Repository
public interface AnalyseRepository extends JpaRepository<Analyse, Integer> {

}

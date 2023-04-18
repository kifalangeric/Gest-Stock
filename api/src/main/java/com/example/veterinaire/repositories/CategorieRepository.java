package com.example.veterinaire.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.veterinaire.models.Categorie;


@Repository
public interface CategorieRepository extends JpaRepository<Categorie, Integer>{

}

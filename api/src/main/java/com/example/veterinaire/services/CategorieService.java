package com.example.veterinaire.services;



import java.util.List;

import org.springframework.stereotype.Service;

import com.example.veterinaire.models.Categorie;


@Service
public interface CategorieService {
	
	public List<Categorie> getAll();

    public Categorie findById(Integer id);

    public Categorie save(Categorie categorie);

    public Categorie update(Categorie categorie);

    public void deleteById(Integer id);

}

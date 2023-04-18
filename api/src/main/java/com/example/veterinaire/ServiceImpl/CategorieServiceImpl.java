package com.example.veterinaire.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.veterinaire.models.Categorie;
import com.example.veterinaire.repositories.CategorieRepository;
import com.example.veterinaire.services.CategorieService;

@Service
public class CategorieServiceImpl implements CategorieService{
	
	@Autowired
    public CategorieRepository categorieRepository;

    @Override
    public List<Categorie> getAll() {
        return this.categorieRepository.findAll();
    }

    @Override
    public Categorie findById(Integer id) {
        return this.categorieRepository.findById(id).orElse(null);
    }

    @Override
    public Categorie save(Categorie categorie) {
        return this.categorieRepository.save(categorie);
    }

    @Override
    public Categorie update(Categorie categorie) {
        return this.categorieRepository.save(categorie);
    }

    @Override
    public void deleteById(Integer id) {
        this.categorieRepository.deleteById(id);
    }

}

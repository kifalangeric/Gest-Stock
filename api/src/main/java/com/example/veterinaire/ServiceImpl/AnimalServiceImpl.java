package com.example.veterinaire.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.veterinaire.models.Animal;
import com.example.veterinaire.models.Categorie;
import com.example.veterinaire.repositories.AnimalRepository;
import com.example.veterinaire.repositories.CategorieRepository;
import com.example.veterinaire.services.AnimalService;

@Service
public class AnimalServiceImpl implements AnimalService{
	
	@Autowired
    public AnimalRepository animalRepository;

    @Override
    public List<Animal> getAll() {
        return this.animalRepository.findAll();
    }

    @Override
    public Animal findById(Integer id) {
        return this.animalRepository.findById(id).orElse(null);
    }

    @Override
    public Animal save(Animal animal) {
        return this.animalRepository.save(animal);
    }

    @Override
    public Animal update(Animal animal) {
        return this.animalRepository.save(animal);
    }

    @Override
    public void deleteById(Integer id) {
        this.animalRepository.deleteById(id);
    }


}

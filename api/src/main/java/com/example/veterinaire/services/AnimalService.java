package com.example.veterinaire.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.veterinaire.models.Animal;


@Service
public interface AnimalService {
	
	public List<Animal> getAll();

    public Animal findById(Integer id);

    public Animal save(Animal animal);

    public Animal update(Animal animal);

    public void deleteById(Integer id);

}

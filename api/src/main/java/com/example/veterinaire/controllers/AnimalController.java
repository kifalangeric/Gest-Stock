package com.example.veterinaire.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.veterinaire.models.Animal;
import com.example.veterinaire.services.AnimalService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class AnimalController {

	
	@Autowired
	public AnimalService animalService;

	@RequestMapping(value = "/animals", method = RequestMethod.GET)
	public List<Animal> getAllAnimals() {

	    List<Animal> animals = new ArrayList<>();

	    try {
	        animals = this.animalService.getAll();
	    } catch (Exception e) {
	        System.out.println("Erreur " + e.getMessage());
	    }

	    return animals;

	}

	@RequestMapping(value = "/animal/{id}", method = RequestMethod.GET)
	public Animal getOneAnimal(@PathVariable Integer id) {

	    Animal animal = new Animal();

	    try {
	        animal = this.animalService.findById(id);
	    } catch (Exception e) {
	        System.out.println("Erreur " + e.getMessage());
	    }

	    return animal;
	}

	@RequestMapping(value = "/animal/ajouter", method = RequestMethod.POST, headers = "accept=Application/json")
	public Animal saveAnimal(@RequestBody Animal animal) {

	    try {
	        animal = this.animalService.save(animal);
	    } catch (Exception e) {
	        System.out.println("Erreur " + e.getMessage());
	    }

	    return animal;
	}

	@RequestMapping(value = "/animal/modifier/{id}", method = RequestMethod.PUT, headers = "accept=Application/json")
	public Animal updateAnimal(@RequestBody Animal animal) {

	    try {
	        animal = this.animalService.update(animal);
	    } catch (Exception e) {
	        System.out.println("Erreur " + e.getMessage());
	    }

	    return animal;

	}

	@RequestMapping(value = "/animal/supprimer/{id}", method = RequestMethod.DELETE, headers = "accept=Application/json")
	public void deleteAnimal(@PathVariable Integer id) {
	    this.animalService.deleteById(id);
	}

}

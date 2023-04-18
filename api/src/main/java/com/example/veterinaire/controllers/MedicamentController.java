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

import com.example.veterinaire.models.Medicament;
import com.example.veterinaire.services.AnalyseService;
import com.example.veterinaire.services.MedicamentService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class MedicamentController {
	
	@Autowired
	public MedicamentService medicamentService;
	
	@RequestMapping(value = "/medicaments", method = RequestMethod.GET)
	public List<Medicament> getAllMedicaments() {

	    List<Medicament> medicaments = new ArrayList<>();

	    try {
	        medicaments = this.medicamentService.getAll();
	    } catch (Exception e) {
	        System.out.println("Erreur " + e.getMessage());
	    } 

	    return medicaments;
	}

	@RequestMapping(value = "/medicament/{id}", method = RequestMethod.GET)
	public Medicament getOneMedicament(@PathVariable Integer id) {

	    Medicament medicament = new Medicament();

	    try {
	        medicament = this.medicamentService.findById(id);
	    } catch (Exception e) {
	        System.out.println("Erreur " + e.getMessage());
	    }

	    return medicament;
	}

	@RequestMapping(value = "/medicament/ajouter", method = RequestMethod.POST, headers = "accept=Application/json")
	public Medicament saveMedicament(@RequestBody Medicament medicament) {

	    try {
	        medicament = this.medicamentService.save(medicament);
	    } catch (Exception e) {
	        System.out.println("Erreur " + e.getMessage());
	    }

	    return medicament;
	}

	@RequestMapping(value = "/medicament/modifier/{id}", method = RequestMethod.PUT, headers = "accept=Application/json")
	public Medicament updateMedicament(@RequestBody Medicament medicament) {

	    try {
	        medicament = this.medicamentService.update(medicament);
	    } catch (Exception e) {
	        System.out.println("Erreur " + e.getMessage());
	    }

	    return medicament;
	}

	@RequestMapping(value = "/medicament/supprimer/{id}", method = RequestMethod.DELETE, headers = "accept=Application/json")
	public void deleteMedicament(@PathVariable Integer id) {
	    this.medicamentService.deleteById(id);
	}


}

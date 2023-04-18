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

import com.example.veterinaire.models.Analyse;
import com.example.veterinaire.services.AnalyseService;
import com.example.veterinaire.services.ConsultationService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class AnalyseController {
	
	@Autowired
	public AnalyseService analyseService;
	
	@RequestMapping(value = "/analyses", method = RequestMethod.GET)
	public List<Analyse> getAllAnalyses() {

	    List<Analyse> analyses = new ArrayList<>();

	    try {
	        analyses = this.analyseService.getAll();
	    } catch (Exception e) {
	        System.out.println("Erreur " + e.getMessage());
	    }

	    return analyses;
	}

	@RequestMapping(value = "/analyse/{id}", method = RequestMethod.GET)
	public Analyse getOneAnalyse(@PathVariable Integer id) {

	    Analyse analyse = new Analyse();

	    try {
	        analyse = this.analyseService.findById(id);
	    } catch (Exception e) {
	        System.out.println("Erreur " + e.getMessage());
	    }

	    return analyse;
	}

	@RequestMapping(value = "/analyse/ajouter", method = RequestMethod.POST, headers = "accept=Application/json")
	public Analyse saveAnalyse(@RequestBody Analyse analyse) {

	    try {
	        analyse = this.analyseService.save(analyse);
	    } catch (Exception e) {
	        System.out.println("Erreur " + e.getMessage());
	    }

	    return analyse;
	}

	@RequestMapping(value = "/analyse/modifier/{id}", method = RequestMethod.PUT, headers = "accept=Application/json")
	public Analyse updateAnalyse(@RequestBody Analyse analyse) {

	    try {
	        analyse = this.analyseService.update(analyse);
	    } catch (Exception e) {
	        System.out.println("Erreur " + e.getMessage());
	    }

	    return analyse;
	}

	@RequestMapping(value = "/analyse/supprimer/{id}", method = RequestMethod.DELETE, headers = "accept=Application/json")
	public void deleteAnalyse(@PathVariable Integer id) {
	    this.analyseService.deleteById(id);
	}


}

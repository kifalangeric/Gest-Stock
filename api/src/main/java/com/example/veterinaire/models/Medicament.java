package com.example.veterinaire.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Medicament")
public class Medicament extends Ordonnance{
	
	@Column(name="posologie",nullable = false,unique=false)
	private String posologie;

	public Medicament(Integer id, String code, String intitule, Consultation consultation, String posologie) {
		super(id, code, intitule, consultation);
		this.posologie = posologie;
	}

	public Medicament() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Medicament(Integer id, String code, String intitule, Consultation consultation) {
		super(id, code, intitule, consultation);
		// TODO Auto-generated constructor stub
	}

	public String getPosologie() {
		return posologie;
	}

	public void setPosologie(String posologie) {
		this.posologie = posologie;
	}
	

}

package com.example.veterinaire.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Analyse")
public class Analyse extends Ordonnance{
	
	@Column(name="resultat",nullable = false,unique=false)
	private String resultat;

	public Analyse(Integer id, String code, String intitule, Consultation consultation, String resultat) {
		super(id, code, intitule, consultation);
		this.resultat = resultat;
	}

	public Analyse() {
		super();
		// TODO Auto-generated constructor stub
	}

	/*public Analyse(Integer id, String code, String intitule, Consultation consultation) {
		super(id, code, intitule, consultation);
		// TODO Auto-generated constructor stub
	}*/

	public String getResultat() {
		return resultat;
	}

	public void setResultat(String resultat) {
		this.resultat = resultat;
	}
	
	

}

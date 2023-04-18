package com.example.veterinaire.models;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Consultation")
public class Consultation {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="motif",nullable = false,unique=false)
	private String motif;
	
	
	@Column(name="diagnostic",nullable = false,unique=false)
	private String diagnostic;
	
	@ManyToOne()
    @JoinColumn(name = "animal_id")
    private Animal animal;

	@JsonIgnore
	@OneToMany(mappedBy = "consultation",fetch = FetchType.LAZY)
	private Set<Ordonnance> ordonnances;


	public Consultation(Integer id, String motif, String diagnostic, Animal animal, Set<Ordonnance> ordonnances) {
		super();
		this.id = id;
		this.motif = motif;
		this.diagnostic = diagnostic;
		this.animal = animal;
		this.ordonnances = ordonnances;
	}


	public Consultation() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getMotif() {
		return motif;
	}


	public void setMotif(String motif) {
		this.motif = motif;
	}


	public String getDiagnostic() {
		return diagnostic;
	}


	public void setDiagnostic(String diagnostic) {
		this.diagnostic = diagnostic;
	}


	public Animal getAnimal() {
		return animal;
	}


	public void setAnimal(Animal animal) {
		this.animal = animal;
	}


	public Set<Ordonnance> getOrdonnances() {
		return ordonnances;
	}


	public void setOrdonnances(Set<Ordonnance> ordonnances) {
		this.ordonnances = ordonnances;
	}
	
	
}

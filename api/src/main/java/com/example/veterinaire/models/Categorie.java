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
@Table(name = "Categorie")
public class Categorie {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="intitule",nullable = false,unique=false)
	private String intitule;
	
	@Column(name="caracteristiques",nullable = false,unique=false)
	private String caracteristiques;

	@JsonIgnore
	@OneToMany(mappedBy = "categorie",fetch = FetchType.LAZY)
	private Set<Animal> animaux;
	
	
	public Set<Animal> getAnimaux() {
		return animaux;
	}

	public void setAnimaux(Set<Animal> animaux) {
		this.animaux = animaux;
	}

	public Categorie(Integer id, String intitule, String caracteristiques) {
		super();
		this.id = id;
		this.intitule = intitule;
		this.caracteristiques = caracteristiques;
	}

	public Categorie() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getIntitule() {
		return intitule;
	}

	public void setIntitule(String intitule) {
		this.intitule = intitule;
	}

	public String getCaracteristiques() {
		return caracteristiques;
	}

	public void setCaracteristiques(String caracteristiques) {
		this.caracteristiques = caracteristiques;
	}
	
	
}

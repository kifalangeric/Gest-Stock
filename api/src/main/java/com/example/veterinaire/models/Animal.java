package com.example.veterinaire.models;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Animal")
public class Animal {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="nom",nullable = false,unique=false)
	private String nom;
	
	@Column(name="poids",nullable = false,unique=false)
	private Double poids;
	
	
	@Column(name="couleur_pelage",nullable = false,unique=false)
	private String couleur_pelage;
	
	
	@Column(name="photo",nullable = false,unique=false)
	private String photo;
	
	
	@Column(name="autre_specification",nullable = false,unique=false)
	private String autre_specification;
	
	@ManyToOne()
    @JoinColumn(name = "categorie_id")
    private Categorie categorie;
	
	@JsonIgnore
	@OneToMany(mappedBy = "animal"/*,fetch = FetchType.LAZY*/)
	private Set<Consultation> consultations;


	public Animal(Integer id, String nom, Double poids, String couleur_pelage, String photo, String autre_specification,
			Categorie categorie, Set<Consultation> consultations) {
		super();
		this.id = id;
		this.nom = nom;
		this.poids = poids;
		this.couleur_pelage = couleur_pelage;
		this.photo = photo;
		this.autre_specification = autre_specification;
		this.categorie = categorie;
		this.consultations = consultations;
	}


	public Animal() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getNom() {
		return nom;
	}


	public void setNom(String nom) {
		this.nom = nom;
	}


	public Double getPoids() {
		return poids;
	}


	public void setPoids(Double poids) {
		this.poids = poids;
	}


	public String getCouleur_pelage() {
		return couleur_pelage;
	}


	public void setCouleur_pelage(String couleur_pelage) {
		this.couleur_pelage = couleur_pelage;
	}


	public String getPhoto() {
		return photo;
	}


	public void setPhoto(String photo) {
		this.photo = photo;
	}


	public String getAutre_specification() {
		return autre_specification;
	}


	public void setAutre_specification(String autre_specification) {
		this.autre_specification = autre_specification;
	}


	public Categorie getCategorie() {
		return categorie;
	}


	public void setCategorie(Categorie categorie) {
		this.categorie = categorie;
	}


	public Set<Consultation> getConsultations() {
		return consultations;
	}


	public void setConsultations(Set<Consultation> consultations) {
		this.consultations = consultations;
	}
	
	
	
	
	
	

}

package com.example.veterinaire.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MappedSuperclass;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Ordonnance {
	
	@Id
	@GeneratedValue(strategy= GenerationType.TABLE)
	protected Integer id;
	
	@Column(name="code",nullable = false,unique=false)
	protected String code;
	
	
	@Column(name="intitule",nullable = false,unique=false)
	protected String intitule;
	
	
	@ManyToOne()
    @JoinColumn(name = "consultation_id")
    protected Consultation consultation;


	public Ordonnance(Integer id, String code, String intitule, Consultation consultation) {
		super();
		this.id = id;
		this.code = code;
		this.intitule = intitule;
		this.consultation = consultation;
	}


	public Ordonnance() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getCode() {
		return code;
	}


	public void setCode(String code) {
		this.code = code;
	}


	public String getIntitule() {
		return intitule;
	}


	public void setIntitule(String intitule) {
		this.intitule = intitule;
	}


	public Consultation getConsultation() {
		return consultation;
	}


	public void setConsultation(Consultation consultation) {
		this.consultation = consultation;
	}
	
	

}

package com.example.veterinaire.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.veterinaire.models.Consultation;



@Service
public interface ConsultationService {
	
	public List<Consultation> getAll();

    public Consultation findById(Integer id);

    public Consultation save(Consultation consultation);

    public Consultation update(Consultation consultation);

    public void deleteById(Integer id);

}

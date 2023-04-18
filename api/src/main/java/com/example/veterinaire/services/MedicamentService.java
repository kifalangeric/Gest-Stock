package com.example.veterinaire.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.veterinaire.models.Medicament;


@Service
public interface MedicamentService {
	
	public List<Medicament> getAll();

    public Medicament findById(Integer id);

    public Medicament save(Medicament medicament);

    public Medicament update(Medicament medicament);

    public void deleteById(Integer id);

}

package com.example.veterinaire.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.veterinaire.models.Analyse;


@Service
public interface AnalyseService {
	public List<Analyse> getAll();

    public Analyse findById(Integer id);

    public Analyse save(Analyse analyse);

    public Analyse update(Analyse analyse);

    public void deleteById(Integer id);

}

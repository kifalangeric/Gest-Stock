package com.example.veterinaire.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.veterinaire.models.Analyse;
import com.example.veterinaire.models.Categorie;
import com.example.veterinaire.repositories.AnalyseRepository;
import com.example.veterinaire.repositories.CategorieRepository;
import com.example.veterinaire.services.AnalyseService;

@Service
public class AnalyseServiceImpl implements AnalyseService {
	
	@Autowired
    public AnalyseRepository analyseRepository;

    @Override
    public List<Analyse> getAll() {
        return this.analyseRepository.findAll();
    }

    @Override
    public Analyse findById(Integer id) {
        return this.analyseRepository.findById(id).orElse(null);
    }

    @Override
    public Analyse save(Analyse analyse) {
        return this.analyseRepository.save(analyse);
    }

    @Override
    public Analyse update(Analyse analyse) {
        return this.analyseRepository.save(analyse);
    }

    @Override
    public void deleteById(Integer id) {
        this.analyseRepository.deleteById(id);
    }


}

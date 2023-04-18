package com.example.veterinaire.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.veterinaire.models.Categorie;
import com.example.veterinaire.models.Consultation;
import com.example.veterinaire.repositories.CategorieRepository;
import com.example.veterinaire.repositories.ConsultationRepository;
import com.example.veterinaire.services.ConsultationService;

@Service
public class ConsultationServiceImpl implements ConsultationService {
	
	@Autowired
    public ConsultationRepository consultationRepository;

    @Override
    public List<Consultation> getAll() {
        return this.consultationRepository.findAll();
    }

    @Override
    public Consultation findById(Integer id) {
        return this.consultationRepository.findById(id).orElse(null);
    }

    @Override
    public Consultation save(Consultation consultation) {
        return this.consultationRepository.save(consultation);
    }

    @Override
    public Consultation update(Consultation consultation) {
        return this.consultationRepository.save(consultation);
    }

    @Override
    public void deleteById(Integer id) {
        this.consultationRepository.deleteById(id);
    }


}

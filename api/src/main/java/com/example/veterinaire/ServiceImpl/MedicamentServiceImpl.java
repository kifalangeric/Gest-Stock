package com.example.veterinaire.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.veterinaire.models.Categorie;
import com.example.veterinaire.models.Medicament;
import com.example.veterinaire.repositories.CategorieRepository;
import com.example.veterinaire.repositories.MedicamentRepository;
import com.example.veterinaire.services.MedicamentService;

@Service
public class MedicamentServiceImpl implements MedicamentService {
	
	@Autowired
    public MedicamentRepository medicamentRepository;

    @Override
    public List<Medicament> getAll() {
        return this.medicamentRepository.findAll();
    }

    @Override
    public Medicament findById(Integer id) {
        return this.medicamentRepository.findById(id).orElse(null);
    }

    @Override
    public Medicament save(Medicament medicament) {
        return this.medicamentRepository.save(medicament);
    }

    @Override
    public Medicament update(Medicament medicament) {
        return this.medicamentRepository.save(medicament);
    }

    @Override
    public void deleteById(Integer id) {
        this.medicamentRepository.deleteById(id);
    }


}

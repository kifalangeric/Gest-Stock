import { Component, Input, OnInit } from '@angular/core';
import { Animal } from '../models/Animal.class';
import { Consultation } from '../models/Consultation.class';
import { AnimalService } from '../services/animal.service';
import { ConsultationService } from '../services/consultation.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  title = 'nouveauproj';
  isAuth = true;
  number= 0.25320;
  formulaire= true;
  Consultation= false;
  modif=false;
  id!:number;
  couleur: string= "alert alert-success";
  soumission: string= "Soumettre";
  affichermessage= false;
  isDisabled = false;
  //affichererreur= false;
  message: string = "traitement en cours";
  @Input() motif: string = "motif";
  @Input() diagnostic: string = "diagnostic";
  @Input() animal: Animal = new Animal();

  consultation: Consultation = new Consultation();
  
  
  animaux!: Animal[];

  Consultations: Consultation[]=[];
  
  @Input() motifm: string = "motif";
  @Input() diagnosticm: string = "diagnostic";
  @Input() animalm: Animal = new Animal();
  
  constructor(
    private Consultationservice: ConsultationService,
    private Animalservice: AnimalService
    ){


    setTimeout(
      ()=>{
        this.isAuth= false;
      },4000
    );
  }
  ngOnInit(): void {
    /*this.Consultations= this.Consultationservice.Consultations;*/
    this.getAll();
    this.getAllAnimal();
    
  }
  


  getAllAnimal(){
    /*this.couleur="alert alert-success";
    this.affichermessage= true;*/
    setTimeout(() => {
      
    
    this.Animalservice.getAll().subscribe(
      (response: Animal[])=>{
        /*this.affichermessage= false;*/
        this.animaux= response;
        console.log(response);

      },
      (error)=>{
        //this.couleur="alert alert-warning";
        console.log(error);
        //this.message= "Une erreur s'est produite lors du chargement"
        
        
      }

    )}, 0);
  }

  getAll(){
    this.couleur="alert alert-success";
    this.affichermessage= true;
    setTimeout(() => {
      
    
    this.Consultationservice.getAll().subscribe(
      (response: Consultation[])=>{
        this.affichermessage= false;
        this.Consultations= response;
        console.log(response);

      },
      (error)=>{
        this.couleur="alert alert-warning";
        console.log(error);
        this.message= "Une erreur s'est produite lors du chargement"
        
        
      }

    )}, 500);
  }

  
  supprimer(numero:number){
    this.Consultationservice.delete(numero).subscribe(
      (error)=>{
        console.log(error);
      }
    );
    this.Consultationservice.supprimer(numero,this.Consultations);
  }
  


  modifier(){
    this.consultation.id=this.id;
    this.consultation.motif= this.motifm;
    this.consultation.diagnostic= this.diagnosticm;
    this.consultation.animal= this.animalm;
    

    this.Consultationservice.update(this.consultation,this.id).subscribe(
      (error)=>{
        console.log(error);
      }
    );
    this.Consultationservice.modifier(this.Consultations,this.consultation)
    this.Consultation= true;
    this.formulaire= false;
    this.modif=false;

  }

  afficherConsultation(){
    this.Consultation= true;
    this.formulaire= false;
    this.modif=false;
    
  }
  affichermodif(Consultation: Consultation){
    
    this.motifm= Consultation.motif;
    this.diagnosticm= Consultation.diagnostic;
    this.animalm=Consultation.animal;
    
    

    this.Consultation= false;
    this.formulaire= false;
    this.modif=true;
    
  }


  afficherformulaire(){
    this.Consultation= false;
    this.formulaire= true;
    this.modif=false;
    
  }

  /*enregistrer(){
    this.Consultations= this.Consultationservice.enregistrer(this.Consultations,new Consultation(this.Consultations.length+1,this.designation,this.prix_unitaire,this.quantite,this.description,this.model.state));
    this.afficherConsultation();
    this.description= "";
    this.designation= "";
    this.prix_unitaire= 0;
    this.quantite= 0;
    
  }*/

  ajouter(){
    this.consultation.motif= this.motif;
    this.consultation.diagnostic= this.diagnostic;
    this.consultation.animal= this.animal;
    this.isDisabled= true;
    this.soumission= "En cour de soumission";
    setTimeout(() => {
    this.Consultationservice.create(this.consultation).subscribe(
      (error)=>{
        console.log(error);
      }
    );;
    this.Consultations= this.Consultationservice.enregistrer(this.Consultations,this.consultation);
    this.afficherConsultation();
  }, 4000);
  }

}

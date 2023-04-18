import { Component, Input, OnInit } from '@angular/core';
import { Consultation } from '../models/Consultation.class';
import { Medicament } from '../models/Medicament.class';
import { ConsultationService } from '../services/consultation.service';
import { MedicamentService } from '../services/medicament.service';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.scss']
})
export class MedicamentComponent implements OnInit {

  title = 'nouveauproj';
  isAuth = true;
  number= 0.25320;
  formulaire= true;
  Medicament= false;
  modif=false;
  id!:number;
  couleur: string= "alert alert-success";
  soumission: string= "Soumettre";
  affichermessage= false;
  isDisabled = false;
  //affichererreur= false;
  message: string = "traitement en cours";
  @Input() code: string = "code";
  @Input() intitule: string = "intitule";
  @Input() posologie: string = "posologie";
  @Input() consultation: Consultation = new Consultation();

  medicament: Medicament = new Medicament();
  
  
  consultations!: Consultation[];

  Medicaments: Medicament[]=[];
  
  @Input() codem: string = "code";
  @Input() intitulem: string = "intitule";
  @Input() posologiem: string = "posologie";
  @Input() consultationm: Consultation = new Consultation();
  constructor(
    private Medicamentservice: MedicamentService,
    private Consultationservice: ConsultationService
    ){


    setTimeout(
      ()=>{
        this.isAuth= false;
      },4000
    );
  }
  ngOnInit(): void {
    /*this.Medicaments= this.Medicamentservice.Medicaments;*/
    this.getAll();
    this.getAllConsultation();
    
  }
  


  getAllConsultation(){
    /*this.couleur="alert alert-success";
    this.affichermessage= true;*/
    setTimeout(() => {
      
    
    this.Consultationservice.getAll().subscribe(
      (response: Consultation[])=>{
        /*this.affichermessage= false;*/
        this.consultations= response;
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
      
    
    this.Medicamentservice.getAll().subscribe(
      (response: Medicament[])=>{
        this.affichermessage= false;
        this.Medicaments= response;
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
    this.Medicamentservice.delete(numero).subscribe(
      (error)=>{
        console.log(error);
      }
    );
    this.Medicamentservice.supprimer(numero,this.Medicaments);
  }
  


  modifier(){
    this.medicament.id=this.id;
    this.medicament.code= this.codem;
    this.medicament.intitule= this.intitulem;
    this.medicament.posologie= this.posologiem
    this.medicament.consultation= this.consultationm;
    

    this.Medicamentservice.update(this.medicament,this.id).subscribe(
      (error)=>{
        console.log(error);
      }
    );
    this.Medicamentservice.modifier(this.Medicaments,this.medicament)
    this.Medicament= true;
    this.formulaire= false;
    this.modif=false;

  }

  afficherMedicament(){
    this.Medicament= true;
    this.formulaire= false;
    this.modif=false;
    
  }
  affichermodif(Medicament: Medicament){
    
    this.codem= Medicament.code;
    this.intitulem= Medicament.intitule;
    this.posologiem= Medicament.posologie;
    this.consultationm=Medicament.consultation;
    
    

    this.Medicament= false;
    this.formulaire= false;
    this.modif=true;
    
  }


  afficherformulaire(){
    this.Medicament= false;
    this.formulaire= true;
    this.modif=false;
    
  }

  /*enregistrer(){
    this.Medicaments= this.Medicamentservice.enregistrer(this.Medicaments,new Medicament(this.Medicaments.length+1,this.designation,this.prix_unitaire,this.quantite,this.description,this.model.state));
    this.afficherMedicament();
    this.description= "";
    this.designation= "";
    this.prix_unitaire= 0;
    this.quantite= 0;
    
  }*/

  ajouter(){
    this.medicament.code= this.codem;
    this.medicament.intitule= this.intitulem;
    this.medicament.posologie= this.posologiem
    this.medicament.consultation= this.consultationm;
    this.isDisabled= true;
    this.soumission= "En cour de soumission";
    setTimeout(() => {
    this.Medicamentservice.create(this.medicament).subscribe(
      (error)=>{
        console.log(error);
      }
    );;
    this.Medicaments= this.Medicamentservice.enregistrer(this.Medicaments,this.medicament);
    this.afficherMedicament();
  }, 4000);
  }

}

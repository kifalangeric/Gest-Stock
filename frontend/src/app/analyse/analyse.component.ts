import { Component, Input, OnInit } from '@angular/core';
import { Analyse } from '../models/Analyse.class';
import { Consultation } from '../models/Consultation.class';
import { AnalyseService } from '../services/analyse.service';
import { ConsultationService } from '../services/consultation.service';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.scss']
})
export class AnalyseComponent implements OnInit {

  title = 'nouveauproj';
  isAuth = true;
  number= 0.25320;
  formulaire= true;
  Analyse= false;
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
  @Input() resultat: string = "resultat";
  @Input() consultation: Consultation = new Consultation();

  analyse: Analyse = new Analyse();
  
  
  consultations!: Consultation[];

  Analyses: Analyse[]=[];
  
  @Input() codem: string = "code";
  @Input() intitulem: string = "intitule";
  @Input() resultatm: string = "resultat";
  @Input() consultationm: Consultation = new Consultation();
  constructor(
    private Analyseservice: AnalyseService,
    private Consultationservice: ConsultationService
    ){


    setTimeout(
      ()=>{
        this.isAuth= false;
      },4000
    );
  }
  ngOnInit(): void {
    /*this.Analyses= this.Analyseservice.Analyses;*/
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
      
    
    this.Analyseservice.getAll().subscribe(
      (response: Analyse[])=>{
        this.affichermessage= false;
        this.Analyses= response;
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
    this.Analyseservice.delete(numero).subscribe(
      (error)=>{
        console.log(error);
      }
    );
    this.Analyseservice.supprimer(numero,this.Analyses);
  }
  


  modifier(){
    this.analyse.id=this.id;
    this.analyse.code= this.codem;
    this.analyse.intitule= this.intitulem;
    this.analyse.resultat= this.resultatm
    this.analyse.consultation= this.consultationm;
    

    this.Analyseservice.update(this.analyse,this.id).subscribe(
      (error)=>{
        console.log(error);
      }
    );
    this.Analyseservice.modifier(this.Analyses,this.analyse)
    this.Analyse= true;
    this.formulaire= false;
    this.modif=false;

  }

  afficherAnalyse(){
    this.Analyse= true;
    this.formulaire= false;
    this.modif=false;
    
  }
  affichermodif(Analyse: Analyse){
    
    this.codem= Analyse.code;
    this.intitulem= Analyse.intitule;
    this.resultatm= Analyse.resultat;
    this.consultationm=Analyse.consultation;
    
    

    this.Analyse= false;
    this.formulaire= false;
    this.modif=true;
    
  }


  afficherformulaire(){
    this.Analyse= false;
    this.formulaire= true;
    this.modif=false;
    
  }

  /*enregistrer(){
    this.Analyses= this.Analyseservice.enregistrer(this.Analyses,new Analyse(this.Analyses.length+1,this.designation,this.prix_unitaire,this.quantite,this.description,this.model.state));
    this.afficherAnalyse();
    this.description= "";
    this.designation= "";
    this.prix_unitaire= 0;
    this.quantite= 0;
  }*/

  ajouter(){
    this.analyse.code= this.codem;
    this.analyse.intitule= this.intitulem;
    this.analyse.resultat= this.resultatm
    this.analyse.consultation= this.consultationm;
    this.isDisabled= true;
    this.soumission= "En cour de soumission";
    setTimeout(() => {
    this.Analyseservice.create(this.analyse).subscribe(
      (error)=>{
        console.log(error);
      }
    );;
    this.Analyses= this.Analyseservice.enregistrer(this.Analyses,this.analyse);
    this.afficherAnalyse();
  }, 4000);
  }


}

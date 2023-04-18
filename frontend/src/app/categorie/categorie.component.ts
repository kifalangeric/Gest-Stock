import { Component, Input, OnInit } from '@angular/core';
import { Categorie } from '../models/Categorie.class';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  title = 'nouveauproj';
  isAuth = true;
  number= 0.25320;
  formulaire= true;
  Categorie= false;
  modif=false;
  id!:number;
  couleur: string= "alert alert-success";
  soumission: string= "Soumettre";
  affichermessage= false;
  isDisabled = false;
  //affichererreur= false;
  message: string = "traitement en cours";
  @Input() intitule: string = "intitule";
  @Input() caracteristiques: string = "caracteristiques";

  categorie: Categorie = new Categorie();
  
  
  

  Categories: Categorie[]=[];
  
  @Input() intitulem: string = "intitule";
  @Input() caracteristiquesm: string = "caracteristiques";

  
  constructor(
    private Categorieservice: CategorieService
    ){


    setTimeout(
      ()=>{
        this.isAuth= false;
      },4000
    );
  }
  ngOnInit(): void {
    /*this.Categories= this.Categorieservice.Categories;*/
    this.getAll();
    
  }
  

  getAll(){
    this.couleur="alert alert-success";
    this.affichermessage= true;
    setTimeout(() => {
      
    
    this.Categorieservice.getAll().subscribe(
      (response: Categorie[])=>{
        this.affichermessage= false;
        this.Categories= response;
        console.log(response);

      },
      (error)=>{
        this.couleur="alert alert-warning";
        console.log(error);
        this.message= "Une erreur s'est produite lors du chargement"
        
        
      }

    )}, 4000);
  }

  
  supprimer(numero:number){
    this.Categorieservice.delete(numero).subscribe(
      (error)=>{
        console.log(error);
      }
    );
    this.Categorieservice.supprimer(numero,this.Categories);
  }
  


  modifier(){
    this.categorie.id=this.id;
    this.categorie.intitule= this.intitulem;
    this.categorie.caracteristiques= this.caracteristiquesm;
    

    this.Categorieservice.update(this.categorie,this.id).subscribe(
      (error)=>{
        console.log(error);
      }
    );
    this.Categorieservice.modifier(this.Categories,this.categorie)
    this.Categorie= true;
    this.formulaire= false;
    this.modif=false;

  }

  afficherCategorie(){
    this.Categorie= true;
    this.formulaire= false;
    this.modif=false;
    
  }
  affichermodif(Categorie: Categorie){
    
    this.intitulem= Categorie.intitule;
    this.caracteristiquesm= Categorie.caracteristiques;
    

    this.Categorie= false;
    this.formulaire= false;
    this.modif=true;
    
  }


  afficherformulaire(){
    this.Categorie= false;
    this.formulaire= true;
    this.modif=false;
    
  }

  /*enregistrer(){
    this.Categories= this.Categorieservice.enregistrer(this.Categories,new Categorie(this.Categories.length+1,this.designation,this.prix_unitaire,this.quantite,this.description,this.model.state));
    this.afficherCategorie();
    this.description= "";
    this.designation= "";
    this.prix_unitaire= 0;
    this.quantite= 0;
    
  }*/

  ajouter(){
    this.categorie.intitule= this.intitule;
    this.categorie.caracteristiques= this.caracteristiques;
    this.isDisabled= true;
    this.soumission= "En cour de soumission";
    setTimeout(() => {
    this.Categorieservice.create(this.categorie).subscribe(
      (error)=>{
        console.log(error);
      }
    );;
    this.Categories= this.Categorieservice.enregistrer(this.Categories,this.categorie);
    this.afficherCategorie();
  }, 4000);
  }




}

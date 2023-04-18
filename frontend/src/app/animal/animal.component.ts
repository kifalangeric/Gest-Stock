import { Component, Input, OnInit } from '@angular/core';
import { Animal } from '../models/Animal.class';
import { Categorie } from '../models/Categorie.class';
import { AnimalService } from '../services/animal.service';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  title = 'nouveauproj';
  isAuth = true;
  number= 0.25320;
  formulaire= true;
  Animal= false;
  modif=false;
  id!:number;
  couleur: string= "alert alert-success";
  soumission: string= "Soumettre";
  affichermessage= false;
  isDisabled = false;
  //affichererreur= false;
  message: string = "traitement en cours";
  @Input() nom: string = "nom";
  @Input() poids: Number = 0;
  @Input() couleur_pelage: string = "couleur du pelage";
  @Input() photo: string = "photo";
  @Input() autre_specification: string = "autre spécification";
  @Input() categorie: Categorie = new Categorie();

  animal: Animal = new Animal();
  
  
  categories!: Categorie[];

  Animals: Animal[]=[];
  
  @Input() nomm: string = "nom";
  @Input() poidsm: Number = 0;
  @Input() couleur_pelagem: string = "couleur du pelage";
  @Input() photom: string = "Sexe";
  @Input() autre_specificationm: string = "autre spécification";
  @Input() categoriem: Categorie = new Categorie();

  
  constructor(
    private Animalservice: AnimalService,
    private Categorieservice: CategorieService
    ){


    setTimeout(
      ()=>{
        this.isAuth= false;
      },4000
    );
  }
  ngOnInit(): void {
    /*this.Animals= this.Animalservice.Animals;*/
    this.getAll();
    this.getAllCategorie();
    
  }
  


  getAllCategorie(){
    /*this.couleur="alert alert-success";
    this.affichermessage= true;*/
    setTimeout(() => {
      
    
    this.Categorieservice.getAll().subscribe(
      (response: Categorie[])=>{
        /*this.affichermessage= false;*/
        this.categories= response;
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
      
    
    this.Animalservice.getAll().subscribe(
      (response: Animal[])=>{
        this.affichermessage= false;
        this.Animals= response;
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
    this.Animalservice.delete(numero).subscribe(
      (error)=>{
        console.log(error);
      }
    );
    this.Animalservice.supprimer(numero,this.Animals);
  }
  


  modifier(){
    this.animal.id=this.id;
    this.animal.nom= this.nomm;
    this.animal.poids= this.poidsm;
    this.animal.couleur_pelage= this.couleur_pelagem;
    this.animal.autre_specification= this.autre_specificationm;
    this.animal.photo=this.photom;
    this.animal.categorie= this.categoriem;
    

    this.Animalservice.update(this.animal,this.id).subscribe(
      (error)=>{
        console.log(error);
      }
    );
    this.Animalservice.modifier(this.Animals,this.animal)
    this.Animal= true;
    this.formulaire= false;
    this.modif=false;

  }

  afficherAnimal(){
    this.Animal= true;
    this.formulaire= false;
    this.modif=false;
    
  }
  affichermodif(Animal: Animal){
    
    this.nomm= Animal.nom;
    this.poidsm= Animal.poids;
    this.autre_specification= Animal.autre_specification;
    this.categoriem=Animal.categorie;
    this.couleur_pelagem=this.couleur_pelage;
    

    this.Animal= false;
    this.formulaire= false;
    this.modif=true;
    
  }


  afficherformulaire(){
    this.Animal= false;
    this.formulaire= true;
    this.modif=false;
    
  }

  /*enregistrer(){
    this.Animals= this.Animalservice.enregistrer(this.Animals,new Animal(this.Animals.length+1,this.designation,this.prix_unitaire,this.quantite,this.description,this.model.state));
    this.afficherAnimal();
    this.description= "";
    this.designation= "";
    this.prix_unitaire= 0;
    this.quantite= 0;
    
  }*/

  ajouter(){
    this.animal.nom= this.nom;
    this.animal.poids= this.poids;
    this.animal.couleur_pelage= this.couleur_pelage;
    this.animal.autre_specification= this.autre_specification;
    this.animal.photo=this.photo;
    this.animal.categorie= this.categorie;
    this.isDisabled= true;
    this.soumission= "En cour de soumission";
    setTimeout(() => {
    this.Animalservice.create(this.animal).subscribe(
      (error)=>{
        console.log(error);
      }
    );;
    this.Animals= this.Animalservice.enregistrer(this.Animals,this.animal);
    this.afficherAnimal();
  }, 4000);
  }




}

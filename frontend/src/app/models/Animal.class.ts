import { Categorie } from "./Categorie.class";
import { Consultation } from "./Consultation.class";

export class Animal {

    id!: number;
    nom!: string;
    poids!: Number;
    couleur_pelage!: string;
    photo!: string;
    autre_specification!: string;
    categorie!: Categorie;
    consultations!: Consultation[];
  
    constructor() { }
  
    
  }
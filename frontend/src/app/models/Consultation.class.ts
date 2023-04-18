import { Animal } from "./Animal.class";
import { Ordonnance } from "./Ordonnance.class";

export class Consultation {

    id!: number;
    motif!: string;
    diagnostic!: string
    animal!: Animal;
    ordonnances!: Ordonnance[];
  
    constructor() { }
  
    
  }
import { Consultation } from "./Consultation.class";

export class Ordonnance {

    id!: number;
    code!: string;
    intitule!: string
    consultation!: Consultation;
  
    constructor() { }
  
    
  }
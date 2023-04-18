import { Consultation } from "../models/Consultation.class";
import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class ConsultationService{
  
  /*Consultations: Consultation[] = [
    new Consultation(1,"A1","bic",100,58,  true),
    new Consultation(2,"A3","craie",25,55,  true),
    new Consultation(3,"A4","savon",500,100,  true)
  ];*/

  
  url_all="http://localhost:8000/api/consultations";
  url_add="http://localhost:8000/api/consultation/ajouter";
  url_update="http://localhost:8000/api/consultation/modifier";
  url_delete="http://localhost:8000/api/consultation/supprimer";
  url_find_one="http://localhost:8000/api/consultation";
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(
    private httpclient: HttpClient
    )
    {
      
    }
    getAll(): Observable<Array<Consultation>>{
      return this.httpclient.get<Array<Consultation>>(this.url_all);
    }
  

    create(Consultation: Consultation): Observable<any> {
      return this.httpclient.post(this.url_add, Consultation);
      
    }

    update(Consultation:Consultation,id: any): Observable<any> {
      return this.httpclient.put(`${this.url_update}/${id}`, Consultation);
    }

    delete(id: any): Observable<any> {
      return this.httpclient.delete(`${this.url_delete}/${id}`);
    }
    /*activer(numero1:number, Consultations:Consultation[]){
        for(let i in Consultations){
          if(Consultations[i].getid()==numero1){
            Consultations[i].setstatus(true);
    
          }
        }
        
      }
    
      desactiver(numero1:number, Consultations:Consultation[]){
        for(let i in Consultations){
          if(Consultations[i].getid()==numero1){
            Consultations[i].setstatus(false);
    
          }
        }
      }*/

      supprimer(numero1:number, Consultations:Consultation[]){
        for(let i in Consultations){
          if(Consultations[i].id==numero1){
            Consultations.splice(Consultations.indexOf(Consultations[i]),1);
    
          }
        }
      }

      modifier(Consultations:Consultation[],Consultation:Consultation){
        for(let i in Consultations){
          if(Consultations[i].id==Consultation.id){
            Consultations[i]=Consultation;
    
          }
        }
      }

      enregistrer(Consultations:Consultation[],Consultation: Consultation){
        Consultations.push( 
          Consultation
          
        );
        return Consultations;
      }

}
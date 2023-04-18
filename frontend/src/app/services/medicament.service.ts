import { Medicament } from "../models/Medicament.class";
import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class MedicamentService{
  
  /*Medicaments: Medicament[] = [
    new Medicament(1,"A1","bic",100,58,  true),
    new Medicament(2,"A3","craie",25,55,  true),
    new Medicament(3,"A4","savon",500,100,  true)
  ];*/

  
  url_all="http://localhost:8000/api/medicaments";
  url_add="http://localhost:8000/api/medicament/ajouter";
  url_update="http://localhost:8000/api/medicament/modifier";
  url_delete="http://localhost:8000/api/medicament/supprimer";
  url_find_one="http://localhost:8000/api/medicament";
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(
    private httpclient: HttpClient
    )
    {
      
    }
    getAll(): Observable<Array<Medicament>>{
      return this.httpclient.get<Array<Medicament>>(this.url_all);
    }
  

    create(Medicament: Medicament): Observable<any> {
      return this.httpclient.post(this.url_add, Medicament);
      
    }

    update(Medicament:Medicament,id: any): Observable<any> {
      return this.httpclient.put(`${this.url_update}/${id}`, Medicament);
    }

    delete(id: any): Observable<any> {
      return this.httpclient.delete(`${this.url_delete}/${id}`);
    }
    /*activer(numero1:number, Medicaments:Medicament[]){
        for(let i in Medicaments){
          if(Medicaments[i].getid()==numero1){
            Medicaments[i].setstatus(true);
    
          }
        }
        
      }
    
      desactiver(numero1:number, Medicaments:Medicament[]){
        for(let i in Medicaments){
          if(Medicaments[i].getid()==numero1){
            Medicaments[i].setstatus(false);
    
          }
        }
      }*/

      supprimer(numero1:number, Medicaments:Medicament[]){
        for(let i in Medicaments){
          if(Medicaments[i].id==numero1){
            Medicaments.splice(Medicaments.indexOf(Medicaments[i]),1);
    
          }
        }
      }

      modifier(Medicaments:Medicament[],Medicament:Medicament){
        for(let i in Medicaments){
          if(Medicaments[i].id==Medicament.id){
            Medicaments[i]=Medicament;
    
          }
        }
      }

      enregistrer(Medicaments:Medicament[],Medicament: Medicament){
        Medicaments.push( 
          Medicament
          
        );
        return Medicaments;
      }

}
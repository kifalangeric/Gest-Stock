import { Analyse } from "../models/Analyse.class";
import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class AnalyseService{
  
  /*Analyses: Analyse[] = [
    new Analyse(1,"A1","bic",100,58,  true),
    new Analyse(2,"A3","craie",25,55,  true),
    new Analyse(3,"A4","savon",500,100,  true)
  ];*/

  
  url_all="http://localhost:8000/api/analyses";
  url_add="http://localhost:8000/api/analyse/ajouter";
  url_update="http://localhost:8000/api/analyse/modifier";
  url_delete="http://localhost:8000/api/analyse/supprimer";
  url_find_one="http://localhost:8000/api/analyse";
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(
    private httpclient: HttpClient
    )
    {
      
    }
    getAll(): Observable<Array<Analyse>>{
      return this.httpclient.get<Array<Analyse>>(this.url_all);
    }
  

    create(Analyse: Analyse): Observable<any> {
      return this.httpclient.post(this.url_add, Analyse);
      
    }

    update(Analyse:Analyse,id: any): Observable<any> {
      return this.httpclient.put(`${this.url_update}/${id}`, Analyse);
    }

    delete(id: any): Observable<any> {
      return this.httpclient.delete(`${this.url_delete}/${id}`);
    }
    /*activer(numero1:number, Analyses:Analyse[]){
        for(let i in Analyses){
          if(Analyses[i].getid()==numero1){
            Analyses[i].setstatus(true);
    
          }
        }
        
      }
    
      desactiver(numero1:number, Analyses:Analyse[]){
        for(let i in Analyses){
          if(Analyses[i].getid()==numero1){
            Analyses[i].setstatus(false);
    
          }
        }
      }*/

      supprimer(numero1:number, Analyses:Analyse[]){
        for(let i in Analyses){
          if(Analyses[i].id==numero1){
            Analyses.splice(Analyses.indexOf(Analyses[i]),1);
    
          }
        }
      }

      modifier(Analyses:Analyse[],Analyse:Analyse){
        for(let i in Analyses){
          if(Analyses[i].id==Analyse.id){
            Analyses[i]=Analyse;
    
          }
        }
      }

      enregistrer(Analyses:Analyse[],Analyse: Analyse){
        Analyses.push( 
          Analyse
          
        );
        return Analyses;
      }

}
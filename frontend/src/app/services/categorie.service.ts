import { Categorie } from "../models/Categorie.class";
import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class CategorieService{
  
  /*Categories: Categorie[] = [
    new Categorie(1,"A1","bic",100,58,  true),
    new Categorie(2,"A3","craie",25,55,  true),
    new Categorie(3,"A4","savon",500,100,  true)
  ];*/

  
  url_all="http://localhost:8000/api/categories";
  url_add="http://localhost:8000/api/categorie/ajouter";
  url_update="http://localhost:8000/api/categorie/modifier";
  url_delete="http://localhost:8000/api/categorie/supprimer";
  url_find_one="http://localhost:8000/api/categorie";
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(
    private httpclient: HttpClient
    )
    {
      
    }
    getAll(): Observable<Array<Categorie>>{
      return this.httpclient.get<Array<Categorie>>(this.url_all);
    }
  

    create(Categorie: Categorie): Observable<any> {
      return this.httpclient.post(this.url_add, Categorie);
      
    }

    update(Categorie:Categorie,id: any): Observable<any> {
      return this.httpclient.put(`${this.url_update}/${id}`, Categorie);
    }

    delete(id: any): Observable<any> {
      return this.httpclient.delete(`${this.url_delete}/${id}`);
    }
    /*activer(numero1:number, Categories:Categorie[]){
        for(let i in Categories){
          if(Categories[i].getid()==numero1){
            Categories[i].setstatus(true);
    
          }
        }
        
      }
    
      desactiver(numero1:number, Categories:Categorie[]){
        for(let i in Categories){
          if(Categories[i].getid()==numero1){
            Categories[i].setstatus(false);
    
          }
        }
      }*/

      supprimer(numero1:number, Categories:Categorie[]){
        for(let i in Categories){
          if(Categories[i].id==numero1){
            Categories.splice(Categories.indexOf(Categories[i]),1);
    
          }
        }
      }

      modifier(Categories:Categorie[],Categorie:Categorie){
        for(let i in Categories){
          if(Categories[i].id==Categorie.id){
            Categories[i]=Categorie;
    
          }
        }
      }

      enregistrer(Categories:Categorie[],Categorie: Categorie){
        Categories.push( 
          Categorie
          
        );
        return Categories;
      }

}
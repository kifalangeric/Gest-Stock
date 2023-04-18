import { Animal } from "../models/Animal.class";
import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class AnimalService{
  
  /*Animals: Animal[] = [
    new Animal(1,"A1","bic",100,58,  true),
    new Animal(2,"A3","craie",25,55,  true),
    new Animal(3,"A4","savon",500,100,  true)
  ];*/

  
  url_all="http://localhost:8000/api/animals";
  url_add="http://localhost:8000/api/animal/ajouter";
  url_update="http://localhost:8000/api/animal/modifier";
  url_delete="http://localhost:8000/api/animal/supprimer";
  url_find_one="http://localhost:8000/api/animal";
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(
    private httpclient: HttpClient
    )
    {
      
    }
    getAll(): Observable<Array<Animal>>{
      return this.httpclient.get<Array<Animal>>(this.url_all);
    }
  

    create(Animal: Animal): Observable<any> {
      return this.httpclient.post(this.url_add, Animal);
      
    }

    update(Animal:Animal,id: any): Observable<any> {
      return this.httpclient.put(`${this.url_update}/${id}`, Animal);
    }

    delete(id: any): Observable<any> {
      return this.httpclient.delete(`${this.url_delete}/${id}`);
    }
    /*activer(numero1:number, Animals:Animal[]){
        for(let i in Animals){
          if(Animals[i].getid()==numero1){
            Animals[i].setstatus(true);
    
          }
        }
        
      }
    
      desactiver(numero1:number, Animals:Animal[]){
        for(let i in Animals){
          if(Animals[i].getid()==numero1){
            Animals[i].setstatus(false);
    
          }
        }
      }*/

      supprimer(numero1:number, Animals:Animal[]){
        for(let i in Animals){
          if(Animals[i].id==numero1){
            Animals.splice(Animals.indexOf(Animals[i]),1);
    
          }
        }
      }

      modifier(Animals:Animal[],Animal:Animal){
        for(let i in Animals){
          if(Animals[i].id==Animal.id){
            Animals[i]=Animal;
    
          }
        }
      }

      enregistrer(Animals:Animal[],Animal: Animal){
        Animals.push( 
          Animal
          
        );
        return Animals;
      }

}
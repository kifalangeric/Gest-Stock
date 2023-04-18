import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DaschboardComponent } from './admin/daschboard/daschboard.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { AnimalComponent } from './animal/animal.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { MedicamentComponent } from './medicament/medicament.component';

const routes: Routes = [
  {path:"",component:DaschboardComponent },
  {path:"categories",component:CategorieComponent },
  {path:"animaux",component:AnimalComponent },
  {path:"consultations",component:ConsultationComponent },
  {path:"analyses",component:AnalyseComponent },
  {path:"medicaments",component:MedicamentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

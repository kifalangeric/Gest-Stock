import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './admin/footer/footer.component';
import { HeaderComponent } from './admin/header/header.component';
import { MenuComponent } from './admin/menu/menu.component';
import { DaschboardComponent } from './admin/daschboard/daschboard.component';
import { AppRoutingModule } from './app-routing.module';
import { CategorieComponent } from './categorie/categorie.component';
import { AnimalComponent } from './animal/animal.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    DaschboardComponent,
    CategorieComponent,
    AnimalComponent,
    ConsultationComponent,
    AnalyseComponent,
    MedicamentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //RouterTestingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

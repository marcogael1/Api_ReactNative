import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroPersonasComponent } from './registro-personas/registro-personas.component';
import { ActualizarPersonaComponent } from './actualizar-persona/actualizar-persona.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroPersonasComponent,
    ActualizarPersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

//Modules
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CalendarioComponent } from './calendario/calendario/calendario.component';
import { EventosComponent } from './calendario/eventos/eventos.component';
import { ConvitesComponent } from './calendario/convites/convites.component';
import { ContatoComponent } from './institucional/contato/contato.component';

import { DiaCalendarioComponent } from './calendario/dia-calendario/dia-calendario.component';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DiaComponent } from './calendario/dia/dia.component';
import {EventosService} from './service/eventos.service'

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    CalendarioComponent,
    EventosComponent,
    ConvitesComponent,
    ContatoComponent,
    DiaCalendarioComponent,
    LoginComponent,
    CadastroComponent,
    DiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],  
  providers: [EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

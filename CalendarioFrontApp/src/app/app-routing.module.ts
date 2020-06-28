import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CalendarioComponent } from './calendario/calendario/calendario.component';
import { ConvitesComponent } from './calendario/convites/convites.component';
import { EventosComponent } from './calendario/eventos/eventos.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DiaComponent } from './calendario/dia/dia.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  {path: 'contato', component: ContatoComponent },
  {path: 'sobre', component: SobreComponent },
  {path: 'calendario', component: CalendarioComponent },
  {path: 'convites', component: ConvitesComponent },
  {path: 'eventos', component: EventosComponent },
  {path: 'eventos/:id', component: EventosComponent },
  {path: 'login', component: LoginComponent },
  {path: 'cadastro', component: CadastroComponent },
  {path: 'dia/:data', component:DiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

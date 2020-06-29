import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from  '../../service/eventos.service';
import { Eventos } from '../models/eventos';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {

  data:any;
  eventos:Eventos[];

  constructor( private route: ActivatedRoute,
               private eventosService: EventosService) { }

  ngOnInit(): void {
   
    this.route.params
              .subscribe(params =>{
                this.data = new Date(params['data']);
              });

      this.eventosService.eventospordia(this.data, 1)
      .subscribe(
        eventos => {
          this.eventos = eventos;
          console.log(eventos)
        },
        err=>{
          console.log(err)
        }
      )
    
   
  }

  enviaParaEvento(evento:any){
    console.log("Oie")
  }

}

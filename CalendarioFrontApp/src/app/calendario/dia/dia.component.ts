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

  data:Date;
  eventosList:Eventos[];

  constructor( private route: ActivatedRoute,
               private eventosService: EventosService) { }

  ngOnInit(): void {
   
    this.route.params
              .subscribe(params =>{
                this.data = new Date(params['data']);
              });

      const dataFormat = `${this.data.getFullYear()}-${this.data.getMonth()+1 > 10? this.data.getMonth()+1: '0' + (this.data.getMonth()+1) }-${this.data.getDate() > 10? this.data.getDate(): '0' + this.data.getDate() }`
      console.log(dataFormat)
      this.eventosService.eventospordia(dataFormat, 1)
      .subscribe(
        eventos => {
          this.eventosList = eventos;
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

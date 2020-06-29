import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {

  data:any;
  dia:any;

  constructor( private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {
   
    this.route.params
              .subscribe(params =>{
                this.data = new Date(params['data']);
              });

    //Metodo de integrar com o Backend e retornar objeto de listas
    this.dia = {
      eventos:[
        { 
          id:1, 
          titulo: "Teste Evento - 1",
          data: new Date(this.data),
          inicio: "12:00",
          fim: "23:30"
        },
        { 
          id:2,
          titulo: "Teste Evento - 2",
          data: new Date(this.data),
          inicio: "12:00",
          fim: "23:30"
        },
        { 
          id:2,
          titulo: "Teste Evento - 3",
          data: new Date(this.data),
          inicio: "12:00",
          fim: "23:30"
        },
        { 
          id:2,
          titulo: "Teste Evento - 4",
          data: new Date(this.data),
          inicio: "12:00",
          fim: "23:30"
        }
      ]
    }
  }

  enviaParaEvento(evento:any){
    console.log("Oie")
  }

}

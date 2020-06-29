import { Component, OnInit } from '@angular/core';
import { Dia } from '../models/dia';
import { Eventos } from '../models/eventos';
import { EventosService } from  '../../service/eventos.service'

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  constructor( private eventosService: EventosService) { }

  diasDaSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado']
  meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro', 'Outubro','Novembro','Dezembro']
  
  dataAtual:Date;
  hoje:number;
  mes:number;
  ano:number;  
  dias: Array<Dia>;
  diasAntesComecoMes:Array<any>;
  diasDoMes:number;

  eventoList: Eventos[]


  ngOnInit(): void {
    this.dataAtual = new Date();
    this.hoje = this.dataAtual.getDay();
    this.dataAtual.setDate(1)   
    this.mes = this.dataAtual.getMonth();
    this.ano = this.dataAtual.getFullYear();
    this.diasDoMes = new Date(this.ano, this.mes + 1, 0).getDate();
    this.diasAntesComecoMes = new Array(this.dataAtual.getDay());
    this.dias = []

    this.eventosService.eventospormes(this.mes, this.ano, 1)
        .subscribe(
          eventos => {
            this.eventoList = eventos;
            console.log(eventos)
          },
          err=>{
            console.log(err)
          }
        )

    for(let i = 1; i <= this.diasDoMes; i++){
      let arrDia:Dia = new Dia();
      arrDia.diaDoMes = i;
      arrDia.data = new Date(this.ano, this.mes, i);      
      this.dias.push(arrDia);      
    }


  }

}

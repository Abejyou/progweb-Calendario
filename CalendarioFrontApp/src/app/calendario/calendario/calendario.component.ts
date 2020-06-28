import { Component, OnInit } from '@angular/core';
import { Dia } from '../models/dia';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  constructor() { }

  diasDaSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado']
  meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro', 'Outubro','Novembro','Dezembro']
  
  dataAtual:Date;
  hoje:number;
  mes:number;
  ano:number;  
  dias: Array<Dia>;
  diasAntesComecoMes:Array<any>;
  diasDoMes:number;


  ngOnInit(): void {
    this.dataAtual = new Date();
    this.hoje = this.dataAtual.getDay();
    this.dataAtual.setDate(1)   
    this.mes = this.dataAtual.getMonth();
    this.ano = this.dataAtual.getFullYear();
    this.diasDoMes = new Date(this.ano, this.mes + 1, 0).getDate();
    this.diasAntesComecoMes = new Array(this.dataAtual.getDay());
    this.dias = []

    for(let i = 1; i <= this.diasDoMes; i++){
      let arrDia:Dia = new Dia();
      arrDia.diaDoMes = i;
      arrDia.data = new Date(this.ano, this.mes, i);      
      this.dias.push(arrDia);      
    }

    console.log(this.dias)
  }

}

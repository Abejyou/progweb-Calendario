import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../service/eventos.service';
import { Eventos } from '../models/eventos';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  public notificacoes = [{ tipo: "email", quantidade: 2, hora: "12:50" }];
  constructor(private service: EventosService) { }

  ngOnInit(): void {
  }
  onSubmit(data): void {
    console.log(data);
    if (!name) { return; }
    var evento = {
      titulo_evento: 'teste',
      local_evento: 'teste',
      data_inicio: 'string',
      data_fim: 'string',
      descricao: 'string',
    };
    //this.service.add(evento as Eventos)
    //.subscribe(hero => {
    //});
  }

}

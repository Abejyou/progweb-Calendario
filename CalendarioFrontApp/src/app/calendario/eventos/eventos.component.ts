import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../service/eventos.service';
import { Eventos } from '../models/eventos';
//import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  public notificacoes;
  public checkoutForm;
  constructor(private service: EventosService) {
  }

  ngOnInit(): void {
  }
  onSubmit(form): void {
    this.service.add(form.value as Eventos)
      .subscribe(hero => {
      });
  }

}

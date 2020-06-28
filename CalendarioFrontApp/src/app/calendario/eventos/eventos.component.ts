import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  public notificacoes= [{tipo: "email", quantidade: 2, hora: "12:50"}];
  constructor() { }

  ngOnInit(): void {
  }

}

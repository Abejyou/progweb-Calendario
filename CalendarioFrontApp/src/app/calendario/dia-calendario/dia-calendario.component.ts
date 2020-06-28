import { Component, Input } from '@angular/core';
import { Dia } from '../models/dia';

@Component({
  selector: 'app-dia-calendario',
  templateUrl: './dia-calendario.component.html',
  styleUrls: ['./dia-calendario.component.css']
})
export class DiaCalendarioComponent {
  @Input() dia:Dia
}

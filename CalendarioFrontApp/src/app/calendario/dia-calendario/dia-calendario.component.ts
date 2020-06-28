import { Component, Input } from '@angular/core';
import { Dia } from '../models/dia';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dia-calendario',
  templateUrl: './dia-calendario.component.html',
  styleUrls: ['./dia-calendario.component.css']
})
export class DiaCalendarioComponent {
  @Input() dia:Dia

  constructor(
    private route:ActivatedRoute,
    private router: Router
  ){ }
  
  navegarParaDia(){
    console.log('teste')
    this.router.navigate(['/dia/', this.dia.data.toString()]);
  }

}

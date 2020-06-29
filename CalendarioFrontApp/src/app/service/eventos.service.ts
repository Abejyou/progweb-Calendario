import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eventos } from '../calendario/models/eventos';

@Injectable()
export class EventosService {

  private eventoUrl = 'http://localhost:3000/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  eventospormes(): Observable<Eventos[]>{
    return this.http
          .get<Eventos[]>(this.eventoUrl + "eventospormes");
    }

}

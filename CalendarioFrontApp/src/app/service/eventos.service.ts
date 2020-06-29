import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Eventos } from '../calendario/models/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private eventoUrl = '';//'http://localhost:3000/evento';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getHeroes(): Observable<Eventos> {
    return this.http.get(this.eventoUrl).pipe(
      tap(_ => console.log('fetched heroes')),
      catchError(this.handleError<Eventos>('getHeroes', []))
    );
  }

  add(evento: Eventos): Observable<Eventos> {
    /*return this.http.post(this.eventoUrl, evento, this.httpOptions).pipe(
      tap((newEvento: Eventos) => console.log(`added evento w/ id=${newEvento.id}`)),
      catchError(this.handleError<Eventos>(`getHero id`))
    );*/
    return new Observable();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}

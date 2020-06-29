import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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

  eventospormes(mes, ano, usuario): Observable<Eventos[]> {
    let params = new HttpParams()
    params = params.append('mes', mes);
    params = params.append('ano', ano);
    params = params.append('usuario', usuario);

    return this.http      
      .get<Eventos[]>(this.eventoUrl + "eventospormes", { params });
  }


  eventospordia(dia, usuario): Observable<Eventos[]> {
    let params = new HttpParams()
    params = params.append('dia', dia);
    params = params.append('usuario', usuario);

    return this.http      
      .get<Eventos[]>(this.eventoUrl + "eventospordia", { params });
  }

  add(evento: Eventos): Observable<Eventos> {
    console.log(evento);
    return this.http.post(this.eventoUrl + 'evento', evento, this.httpOptions).pipe(
      tap((newEvento: Eventos) => console.log(`added evento w/ id=${newEvento.id}`)),
      catchError(this.handleError<Eventos>(`add`))
    );
  }

  addNotificacao(evento: Eventos): Observable<Eventos> {
    console.log(evento);
    return this.http.post<Eventos>(this.eventoUrl, evento, this.httpOptions).pipe(
      tap((newEvento: Eventos) => console.log(`added evento w/ id=${newEvento.id}`)),
      catchError(this.handleError<Eventos>(`add`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

}

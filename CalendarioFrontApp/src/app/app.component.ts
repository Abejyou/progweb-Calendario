import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'calendario-progweb';
  usuario = null
  ngOnInit(): void {
    

  }

  retornaUsuarioLogado(){
    return localStorage.getItem('Usuario')
  }

}
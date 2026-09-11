import { Component, signal } from '@angular/core';
import { UsuarioService } from './service/usuario-service';
import { Home } from './pages/home/home';

@Component({
  imports: [Home, ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  constructor(private usuarioService: UsuarioService){}

  umaFuncao(){
    this.usuarioService.serUsuario();
  }
}

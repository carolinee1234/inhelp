import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cadastro', url: '/cadastro-profissionais', icon: 'person-add' },
    { title: 'perfil', url: '/perfil', icon: 'person' },
    { title: 'sair', url: '/login', icon: 'log-out' },
  ];
  public labels = [];
  constructor() {}
}

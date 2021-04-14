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
    { title: 'Agenda', url: '/agenda', icon: 'today' },
    { title: 'Contratacoes', url: '/contratacoes-anteriores', icon: 'thumbs-up' },
    { title: 'Pesquisar Profissionais', url: '/pesquisar-profissionais', icon: 'search' },
    { title: 'Feedback', url: '/feedback', icon: 'chatbubbles' },
    { title: 'Pagamento', url: '/pagamento', icon: 'cash' },
    { title: 'sair', url: '/login', icon: 'log-out' },
    
  ];
  public labels = [];
  constructor() {}
}

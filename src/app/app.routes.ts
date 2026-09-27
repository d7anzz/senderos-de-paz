import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ServicesComponent } from './services/services';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'Funeraria Senderos de Paz | Inicio'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Sobre la Empresa | Senderos de Paz'
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Nuestros Servicios | Senderos de Paz'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

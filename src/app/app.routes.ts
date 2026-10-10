import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ServicesComponent } from './services/services';
import { ServiceDetailComponent } from './service-detail/service-detail';
import { SERVICES_DATA } from './services/services-data';

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
    path: 'servicios/:id',
    component: ServiceDetailComponent,
    title: (route) => {
      const id = route.paramMap.get('id');
      const service = id ? SERVICES_DATA[id] : null;
      return service
        ? `${service.name} | Senderos de Paz`
        : 'Detalle de Servicio | Senderos de Paz';
    }
  }, // <--- Aquí faltaba cerrar la llave de este objeto
  {
    path: '**',
    redirectTo: ''
  }
];

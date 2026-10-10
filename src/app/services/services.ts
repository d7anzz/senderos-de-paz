import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'Paquete Funerario' | 'Servicio Especializado';
  image: string;
  badge?: string;
  routePath?: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  readonly phone = '+51936749441';
  readonly phoneFormatted = '936 749 441';

  services: ServiceItem[] = [
    // Paquetes funerarios
    {
      id: 'plan-clasico',
      name: 'Plan Funerario Clásico',
      category: 'Paquete Funerario',
      image: '/paquete-clasico.jpg',
      routePath: '/servicios/plan-clasico'
    },
    {
      id: 'plan-superior',
      name: 'Plan Funerario Superior',
      category: 'Paquete Funerario',
      image: '/paquete-superior.jpg',
      routePath: '/servicios/plan-superior'
    },
    {
      id: 'plan-mejorado',
      name: 'Plan Funerario Mejorado',
      category: 'Paquete Funerario',
      image: '/paquete-mejorado.jpg',
      badge: 'Más Solicitado',
      routePath: '/servicios/plan-mejorado'
    },
    {
      id: 'plan-premium',
      name: 'Plan Funerario Premium',
      category: 'Paquete Funerario',
      image: '/paquete-premium.jpg',
      routePath: '/servicios/plan-premium'
    },
    {
      id: 'plan-vip',
      name: 'Plan Funerario VIP',
      category: 'Paquete Funerario',
      image: '/paquete-vip.jpg',
      badge: 'Exclusivo',
      routePath: '/servicios/plan-vip'
    },
    // Servicios especializados
    {
      id: 'traslado-nacional',
      name: 'Traslados al Interior del País',
      category: 'Servicio Especializado',
      image: '/traslados-interior.jpg',
      routePath: '/servicios/traslados-nacionales'
    },
    {
      id: 'traslado-internacional',
      name: 'Repatriación y Traslados al Exterior',
      category: 'Servicio Especializado',
      image: '/traslados-exterior.jpg',
      routePath: '/servicios/traslados-internacionales'
    },
    {
      id: 'exhumaciones',
      name: 'Servicio de Exhumaciones y Traslado de Restos',
      category: 'Servicio Especializado',
      image: '/exhumacion.webp',
      routePath: '/servicios/exhumaciones'
    },
    {
      id: 'apoyo-duelo',
      name: 'Asistencia Emocional y Manejo de Duelo',
      category: 'Servicio Especializado',
      image: '/asistencia-emocional.jpg',
      routePath: '/servicios/asistencia-duelo'
    }
  ];
}

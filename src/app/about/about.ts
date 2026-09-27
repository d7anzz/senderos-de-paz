import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface CemeteryPartner {
  name: string;
  location: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  readonly phone = '+51936749441';
  readonly phoneFormatted = '936 749 441';

  cemeteries: CemeteryPartner[] = [
    {
      name: 'Camposanto Parque del Recuerdo',
      location: 'Lurín / Puente Piedra / Callao / Ancón',
      image: '/parque_del_recuerdo.png',
      description: 'Extensas áreas verdes, sepulturas en tierra y acompañamiento integral en todas sus sedes.'
    },
    {
      name: 'Camposanto Jardines de la Paz',
      location: 'La Molina / Lurín',
      image: '/jardines-de-la-paz.png',
      description: 'Ambientes ecológicos, columbarios modernos y salas de velación con acabados de primer nivel.'
    },
    {
      name: 'Camposanto Campo Fe',
      location: 'Huachipa / Puente Piedra',
      image: '/campo-fe.webp',
      description: 'Espacios ecuménicos de recogimiento, capillas ceremoniales y pabellones familiares.'
    },
    {
      name: 'Parque Cementerio Mapfre',
      location: 'Huachipa / Ica / Pisco / Chiclayo',
      image: '/mapfre.png',
      description: 'Infraestructura contemporánea, crematorio propio y servicios exequiales certificados.'
    }
  ];
}

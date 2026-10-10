import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SERVICES_DATA, ServiceDetail } from '../services/services-data';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css'
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);

  service: ServiceDetail | null = null;
  readonly phone = '+51936749441';
  readonly phoneFormatted = '936 749 441';

  // Índice de la imagen actual en el carrusel
  currentImageIndex = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id && SERVICES_DATA[id]) {
        this.service = SERVICES_DATA[id];
        this.currentImageIndex = 0; // Reiniciar al cargar otro servicio
      }
    });
  }

  // Métodos de navegación del carrusel
  prevImage(images: string[]): void {
    this.currentImageIndex = (this.currentImageIndex === 0)
      ? images.length - 1
      : this.currentImageIndex - 1;
  }

  nextImage(images: string[]): void {
    this.currentImageIndex = (this.currentImageIndex === images.length - 1)
      ? 0
      : this.currentImageIndex + 1;
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }
}

import { Component, OnInit, OnDestroy, inject } from '@angular/core';
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
export class ServiceDetailComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);

  service: ServiceDetail | null = null;
  readonly phone = '+51936749441';
  readonly phoneFormatted = '936 749 441';

  currentImageIndex = 0;
  private autoSlideInterval: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id && SERVICES_DATA[id]) {
        this.service = SERVICES_DATA[id];
        this.currentImageIndex = 0;
        this.startAutoSlide();
      }
    });
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  private startAutoSlide(): void {
    this.stopAutoSlide();
    if (typeof window !== 'undefined') {
      this.autoSlideInterval = setInterval(() => {
        if (this.service?.gallery && this.service.gallery.length > 1) {
          this.nextImage(this.service.gallery);
        }
      }, 3000); // Cambia cada 3 segundos
    }
  }

  private stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

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
    this.startAutoSlide(); // Reinicia el temporizador al seleccionar manualmente
  }
}

import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

export interface PlanItem {
  id: string;
  name: string;
  image: string;
  badge?: string;
  routePath: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  readonly phone = '+51936749441';
  readonly phoneFormatted = '936 749 441';
  readonly whatsappUrl = 'https://wa.me/51936749441?text=Hola,%20deseo%20asistencia%20inmediata%20de%20Funeraria%20Senderos%20de%20Paz';

  isDrawerOpen = signal(false);

  slides = [
    {
      image: '/slide-1.jpg',
      title: 'Acompañamiento en Momentos Difíciles',
      subtitle: 'Atención respetuosa y apoyo integral las 24 horas del día.',
      tag: 'Guardia Permanente'
    },
    {
      image: '/slide-2.jpg',
      title: 'Flota Moderna y Salas de Velación',
      subtitle: 'Carrozas panorámicas, transporte familiar y capillas acondicionadas.',
      tag: 'Infraestructura Propia'
    },
    {
      image: '/slide-3.jpg',
      title: 'Trámites Integrales y RENIEC',
      subtitle: 'Nos encargamos de todas las gestiones legales y sanitarias por su familia.',
      tag: 'Tranquilidad Absoluta'
    }
  ];
  currentSlide = signal(0);

  // Únicamente los 5 paquetes funerarios
  packages: PlanItem[] = [
    {
      id: 'plan-clasico',
      name: 'Plan Funerario Clásico',
      image: '/paquete-clasico.jpg',
      routePath: '/servicios/plan-clasico'
    },
    {
      id: 'plan-superior',
      name: 'Plan Funerario Superior',
      image: '/paquete-superior.jpg',
      routePath: '/servicios/plan-superior'
    },
    {
      id: 'plan-mejorado',
      name: 'Plan Funerario Mejorado',
      image: '/paquete-mejorado.jpg',
      badge: 'Más Solicitado',
      routePath: '/servicios/plan-mejorado'
    },
    {
      id: 'plan-premium',
      name: 'Plan Funerario Premium',
      image: '/paquete-premium.jpg',
      routePath: '/servicios/plan-premium'
    },
    {
      id: 'plan-vip',
      name: 'Plan Funerario VIP',
      image: '/paquete-vip.jpg',
      badge: 'Exclusivo',
      routePath: '/servicios/plan-vip'
    }
  ];

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+ ]{8,15}$/)]],
    email: ['', [Validators.required, Validators.email]],
    serviceType: ['Inmediato (Fallecimiento reciente)', Validators.required],
    message: [''],
    selectedPackage: ['General']
  });

  isSubmitting = signal(false);
  submitSuccess = signal(false);

  ngOnInit(): void {
    this.preloadImages();
  }

  private preloadImages(): void {
    if (typeof window !== 'undefined') {
      this.slides.forEach((slide) => {
        if (slide.image) {
          const img = new Image();
          img.src = slide.image;
        }
      });
    }
  }

  toggleDrawer(): void {
    this.isDrawerOpen.update((v) => !v);
  }

  nextSlide(): void {
    this.currentSlide.update((i) => (i + 1) % this.slides.length);
  }

  prevSlide(): void {
    this.currentSlide.update((i) => (i - 1 + this.slides.length) % this.slides.length);
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    this.http.post('/api/cotizar', this.contactForm.value).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.submitSuccess.set(true);
        this.contactForm.reset({
          serviceType: 'Inmediato (Fallecimiento reciente)',
          selectedPackage: 'General'
        });
      },
      error: () => {
        this.isSubmitting.set(false);
      }
    });
  }
}

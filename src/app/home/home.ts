import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
export class HomeComponent implements OnInit, OnDestroy {
  // Teléfonos para Llamadas Directas
  readonly phone1 = '+51936749441';
  readonly phone1Formatted = '936 749 441';

  readonly phone2 = '+51987654321'; // <-- Reemplaza por tu segundo número de llamadas
  readonly phone2Formatted = '987 654 321';

  // Número Exclusivo para WhatsApp
  readonly whatsappPhone = '51936749441'; // Solo WhatsApp (sin el +)
  readonly whatsappUrl = `https://wa.me/${this.whatsappPhone}?text=Hola,%20deseo%20asistencia%20inmediata%20de%20Funeraria%20Senderos%20de%20Paz`;

  isDrawerOpen = signal(false);

  slides = [
    {
      image: '/asistencia-emocional.jpg',
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
      image: '/paquete-vip.jpg',
      title: 'Trámites Integrales y RENIEC',
      subtitle: 'Nos encargamos de todas las gestiones legales y sanitarias por su familia.',
      tag: 'Tranquilidad Absoluta'
    }
  ];
  currentSlide = signal(0);
  private carouselInterval: any;

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

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+ ]{8,15}$/)]],
      email: ['', [Validators.email]],
      serviceType: ['Inmediato (Fallecimiento reciente)', Validators.required],
      message: [''],
      selectedPackage: ['General']
    });
  }

  isSubmitting = signal(false);
  submitSuccess = signal(false);

  ngOnInit(): void {
    this.preloadImages();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  private startAutoSlide(): void {
    if (typeof window !== 'undefined') {
      this.carouselInterval = setInterval(() => {
        this.nextSlide();
      }, 5000); // Rotación cada 5 segundos
    }
  }

  private stopAutoSlide(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
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

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { name, phone, email, serviceType, message, selectedPackage } = this.contactForm.value;

    let mensajeWA = `*Solicitud de Asistencia - Senderos de Paz*\n\n` +
                    `👤 *Nombre:* ${name}\n` +
                    `📞 *Teléfono:* ${phone}\n`;

    if (email) {
      mensajeWA += `✉️ *Correo:* ${email}\n`;
    }

    mensajeWA += `📋 *Tipo de servicio:* ${serviceType}\n`;

    if (selectedPackage && selectedPackage !== 'General') {
      mensajeWA += `📦 *Paquete de Interés:* ${selectedPackage}\n`;
    }

    if (message) {
      mensajeWA += `💬 *Consulta:* ${message}\n`;
    }

    const url = `https://wa.me/${this.whatsappPhone}?text=${encodeURIComponent(mensajeWA)}`;

    window.open(url, '_blank');

    this.submitSuccess.set(true);
    this.contactForm.reset({
      serviceType: 'Inmediato (Fallecimiento reciente)',
      selectedPackage: 'General'
    });
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly phone1 = '+51936749441';
  readonly phone1Formatted = '936 749 441';

  readonly phone2 = '+51995539873';
  readonly phone2Formatted = '995 539 873';

  // Número Exclusivo para WhatsApp
  readonly whatsappPhone = '51978010265';
  readonly whatsappUrl = `https://wa.me/${this.whatsappPhone}?text=Hola,%20deseo%20asistencia%20inmediata%20de%20Funeraria%20Senderos%20de%20Paz`;

  readonly facebookUrl = 'https://facebook.com/share/1F2rb4vw9z';
  readonly tiktokUrl = 'https://tiktok.com/@funeraria.sendero0';

  isDrawerOpen = signal(false);
  isPhoneMenuOpen = signal(false);

  toggleDrawer(): void {
    this.isDrawerOpen.update((v) => !v);
  }

  togglePhoneMenu(): void {
    this.isPhoneMenuOpen.update((v) => !v);
  }

  closePhoneMenu(): void {
    this.isPhoneMenuOpen.set(false);
  }
}

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
  readonly phone1 = '+51978010265';
  readonly phone1Formatted = '978 010 265';

  readonly phone2 = '+51995539873'; // <-- PON AQUÍ TU SEGUNDO NÚMERO
  readonly phone2Formatted = '995 539 873'; // <-- FORMATO PARA MOSTRAR

  // Número Exclusivo para WhatsApp
  readonly whatsappPhone = '51936749441'; // <-- PON AQUÍ EL NÚMERO SOLO PARA WHATSAPP (Sin el +)
  readonly whatsappUrl = `https://wa.me/${this.whatsappPhone}?text=Hola,%20deseo%20asistencia%20inmediata%20de%20Funeraria%20Senderos%20de%20Paz`;

  readonly facebookUrl = 'https://facebook.com/share/1F2rb4vw9z';
  readonly tiktokUrl = 'https://tiktok.com/@funeraria.sendero0';

  isDrawerOpen = signal(false);

  toggleDrawer() {
    this.isDrawerOpen.update((v) => !v);
  }
}

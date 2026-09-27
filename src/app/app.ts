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
  readonly phone = '+51936749441';
  readonly phoneFormatted = '936 749 441';

  isDrawerOpen = signal(false);

  toggleDrawer() {
    this.isDrawerOpen.update((v) => !v);
  }
}

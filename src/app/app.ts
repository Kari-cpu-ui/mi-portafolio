import { Component, signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {

  protected readonly title = signal('mi-portafolio-web');

  protected readonly horaMadrid = signal('');

  private intervalo: ReturnType<typeof setInterval> | undefined;

  ngOnInit(): void {
    this.actualizarHora();

    this.intervalo = setInterval(() => {
      this.actualizarHora();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  private actualizarHora(): void {
    this.horaMadrid.set(
      new Intl.DateTimeFormat('es-ES', {
        timeZone: 'Europe/Madrid',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(new Date())
    );
  }
}
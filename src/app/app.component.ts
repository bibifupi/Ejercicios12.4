import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ej1Component } from './ej1/ej1.component';
import { Ej2Component } from './ej2/ej2.component';
import { Ej3Component } from './ej3/ej3.component';
import { Ej4Component } from './ej4/ej4.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DivisasComponent } from './divisas/divisas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Ej1Component, Ej2Component, Ej3Component, Ej4Component,CalculadoraComponent, DivisasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicios12.4';
}

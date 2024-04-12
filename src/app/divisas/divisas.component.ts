import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-divisas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './divisas.component.html',
  styleUrl: './divisas.component.css'
})
export class DivisasComponent {
  cantidad: number = 0;
  tipoMoneda: string = 'Euro'; 

  tasasConversion:{ [key: string]: number } = {
    Euro: 1,
    Libra: 0.85,
    Dolar: 1.07
  };

  // Función para calcular la conversión
  calcularConversion(): number {
    return this.cantidad * this.tasasConversion[this.tipoMoneda];
  }

}

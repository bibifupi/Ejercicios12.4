import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Temporada } from '../_modelo/temporada';

@Component({
  selector: 'app-ej3',
  standalone: true,
  imports: [],
  templateUrl: './ej3.component.html',
  styleUrl: './ej3.component.css'
})

export class Ej3Component {


ejercicio3() {
  // * EJERCICIO 3
  // TODO: En el siguiente código, implemente un tipo de enumeración llamado Temporada que representa
  // las constantes "Otoño", "Invierno", "Primavera" y "Verano". Luego actualice la función para que
  
  // puedes pasar la temporada haciendo referencia a un elemento en la enumeración, por ejemplo
  // Season.Fall, en lugar de la cadena literal "Fall". */
  
  function whichMonths(season:Temporada) {
    
  let monthsInSeason: string;
  switch (season) {
  case Temporada.Otonio:
  monthsInSeason = "September to November";
  break;
  case Temporada.Invierno:
  monthsInSeason = "December to February";
  break;
  case Temporada.Primavera:
  monthsInSeason = "March to May";
  break;
  case Temporada.Verano:
  monthsInSeason = "June to August";
  }
  return monthsInSeason;
  }
  console.log(whichMonths(Temporada.Otonio));
  }
}

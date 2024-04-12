import { Component } from '@angular/core';

@Component({
  selector: 'app-ej2',
  standalone: true,
  imports: [],
  templateUrl: './ej2.component.html',
  styleUrl: './ej2.component.css'
})
export class Ej2Component {
  ejercicio2() {
    /* EJERCICIO 2
    TODO: Puede utilizar tipos para garantizar los resultados de la operación.
    Ejecute el código tal cual y luego modifíquelo.
    que tenga variables fuertemente tipadas. Luego, solucione los errores que
    encuentre para que el resultado
    devuelto a a es 12. */
    let x:any;
    let y:number;
    let a:number;
    x = '5';
    y = 7;
    a = +(x as number) + y;
    console.log(a);
    }

}

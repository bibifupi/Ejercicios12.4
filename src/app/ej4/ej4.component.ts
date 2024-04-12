import { Component } from '@angular/core';

@Component({
  selector: 'app-ej4',
  standalone: true,
  imports: [],
  templateUrl: './ej4.component.html',
  styleUrl: './ej4.component.css'
})
export class Ej4Component {
  ejercicio4() {
    /* EXERCISE 4
    TODO: Declare the array as the type to match the type of the items in the array. */
    let randomNumbers: number[]=[];
    let nextNumber:number;
    for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
    }
    console.log(randomNumbers);
    }
}

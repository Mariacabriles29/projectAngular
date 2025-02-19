import { Component } from '@angular/core';
import {
  Form,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Animal } from '../data/animals';
import Product from './models/Produxt';
//import { NgClass } from '@angular/common';
// import { ChildComponent } from './components/child/child.component';

//import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projectAngular';
  // number: number = 0;
  // userName: string = 'Maria';
  // condition: boolean = false;
  // condition2: string = '';
  // movies: string[] = [
  //   'Lord of the Rings',
  //   'Star Wars',
  //   'Harry Potter',
  //   'The Hobbit',
  //   'The Chronicles of Narnia',
  //   'The Hunger Games',
  //   'The Maze Runner',
  //   'Divergent',
  //   'Percy Jackson',
  //   'Twilight',
  // ];
  // animals: Animal[] = [
  //   {
  //     id: 1,
  //     name: 'Dog',
  //     img: 'https://picsum.photos/id/237/400/300',
  //   },
  //   {
  //     id: 2,
  //     name: 'Cat',
  //     img: 'https://loremflickr.com/400/300/cat',
  //   },
  //   {
  //     id: 3,
  //     name: 'Sheep',
  //     img: 'https://fastly.picsum.photos/id/200/400/300.jpg?hmac=lGKSofs7PgZo646BbRSOhTNhEuRS-FISyNTNUm14rsQ',
  //   },
  // ];

  // addOne() {
  //   this.number++;
  // }

  // comunicacion del padre al hijo variable desde el padre

  // text: string = 'Variable desde el padre';
  // person: any = {
  //   sex: 'hombre',
  //   age: '30',
  // };

  // //para comunicacion del hijo al padre
  // name: string = '';

  // //creando una funcion que modifica el valor de la variable name
  // setName(e: any) {
  //   this.name = e;
  // }

  //se crea un constructor y se inicializa la variable userName
  //se agregan estos otros datos para el jemplo de un modelo y interface
  //para usra product lo recomendable es que se cree un modelo o interface para que se pueda usar en varios componentes
  // aqui en el app.component.ts se crea un objeto de tipo product y se le asignan valores de la interfaz Product
  // userName: string;
  // myNumber: number;
  // myBoolean: boolean;
  // product: Product;
  // constructor() {
  //   this.userName = 'Maria';
  //   this.myNumber = 10;
  //   this.myBoolean = true;
  //   this.product = {
  //     name: 'Computer',
  //     price: 1000,
  //     isForSale: true,
  //   };
  // }

  //se cree una variable para contralar la clase de css que debe mostrar la directiva ngClass
  //esto s ehace para aplicar clases dinamicamente
  // isDark: boolean = false;

  //este metodo se encarga de cambiar el valor de la variable isDark
  // toogleDark() {
  //   this.isDark = !this.isDark;
  // }

  //Formularios  recativos en angular

  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  constructor() {
    this.name = new FormControl('', Validators.required);
    this.duration = new FormControl('', [
      Validators.required,
      Validators.max(300),
    ]);
    this.director = new FormControl('');

    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director,
    });
  }
  handleSubmit(): void {
    console.log(this.movieForm.value);
    //para limpiar los campos del formulario
    this.movieForm.reset();
  }
}

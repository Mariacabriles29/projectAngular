import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

//import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projectAngular';
  // number: number = 0;
  // userName: string = 'Adrian';
  // condition: boolean = false;
  // condition2: string = '';
  movies: string[] = [
    'Lord of the Rings',
    'Star Wars',
    'Harry Potter',
    'The Hobbit',
    'The Chronicles of Narnia',
    'The Hunger Games',
    'The Maze Runner',
    'Divergent',
    'Percy Jackson',
    'Twilight',
  ];

  // addOne() {
  //   this.number++;
  // }
}

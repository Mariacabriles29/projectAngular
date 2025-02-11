import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Animal } from '../data/animals';

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
  animals: Animal[] = [
    {
      id: 1,
      name: 'Dog',
      img: 'https://picsum.photos/id/237/400/300',
    },
    {
      id: 2,
      name: 'Cat',
      img: 'https://loremflickr.com/400/300/cat',
    },
    {
      id: 3,
      name: 'Sheep',
      img: 'https://fastly.picsum.photos/id/200/400/300.jpg?hmac=lGKSofs7PgZo646BbRSOhTNhEuRS-FISyNTNUm14rsQ',
    },
  ];

  // addOne() {
  //   this.number++;
  // }
}

import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  //para pasar informacion del padre al hijo
  // @Input()
  // msg: String = '';

  //creando una variable signal para pasar informacion del padre al hijo
  msg = input<string>('');
  // @Input()
  // person: any = {};

  //  creando un objeto person de tipo signal para pasar informacion del padre al hijo
  person = input<any>();
}

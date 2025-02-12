import { Component, EventEmitter, input, Input, Output } from '@angular/core';

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
  // msg = input<string>('');
  // @Input()
  // person: any = {};

  //  creando un objeto person de tipo signal para pasar informacion del padre al hijo
  // person = input<any>();

  // variable para la comuniacion del hijo al padre

  @Output()
  login: EventEmitter<any> = new EventEmitter<any>();

  userName: string = 'Maria';

  handleLogin() {
    this.login.emit(this.userName);
  }
}

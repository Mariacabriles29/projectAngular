import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  //para pasar informacion del padre al hijo
  @Input()
  msg: String = '';
  @Input()
  person: any = {};
}

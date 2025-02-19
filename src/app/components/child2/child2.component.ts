import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
})
export class Child2Component {
  //se crea este constructor para poder usar el servicio de producto
  constructor(public productService: ProductService) {}
}

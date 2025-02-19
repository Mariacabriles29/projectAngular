import { Injectable } from '@angular/core';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root',
})

//En la creacion de este servicio se importa el modelo de producto y se crea una instancia de producto con valores por defecto
//Se exporta la clase ProductService
export class ProductService {
  product: Product;

  constructor() {
    this.product = {
      name: 'Computer',
      price: 1000,
      isForSale: true,
    };
  }

  //Se crea un metodo para poder cambiar el nombre del producto
  setProductName(name: string): void {
    this.product.name = name;
  }
}

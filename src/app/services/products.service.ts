import { Categories, Category } from './../../shared/Categories';
import { PRODUCTS, CATEGORIES } from './../../shared/data';
import { Injectable } from '@angular/core';
import { Product } from '../../shared/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private recursiveLimit = 10;
  private recursiveCounter = 0;
  constructor() { }
  getCategories(): Category[] {
    return CATEGORIES;
  }
  getProducts(): Product[] {
    return PRODUCTS;
  }
  getProduct(id): Product {
    return PRODUCTS.find(prod => prod.id === id);
  }
  getFromLevel(sublevelId): Product[] {
    return PRODUCTS.filter(prod => prod.sublevel_id === sublevelId);
  }
  private getNextRandom(list: any[]): number {
    let numb = Math.round(Math.random() * PRODUCTS.length);
    if (list.includes(numb) && list.length !=0 && this.recursiveCounter < this.recursiveLimit) {
      this.recursiveCounter++;
      return this.getNextRandom(list);
    }
    return numb;
  }
  getHiProduct(): Product[] {

    let RandomList = [];
    let bestProductos: Product[] = [];
    for (let i = 0; i < 3; i++) {
      let num = this.getNextRandom(RandomList);
      bestProductos.push(PRODUCTS[num]);
      RandomList.push(num);
    }
    return bestProductos;
  }
}

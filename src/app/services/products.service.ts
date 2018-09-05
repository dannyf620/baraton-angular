import { Categories, Category } from './../../shared/Categories';
import { PRODUCTS, CATEGORIES } from './../../shared/data';
import { Injectable } from '@angular/core';
import { Product } from '../../shared/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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
}

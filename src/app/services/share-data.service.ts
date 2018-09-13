import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private actualCategory;
  constructor() { }
  public getCategorie() {
    return this.actualCategory;
  }
  public setCategorie(category) {
    this.actualCategory = category;
  }
}

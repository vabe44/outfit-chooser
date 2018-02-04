import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class ClothesService {
  private skinTonesUrl = 'http://localhost:3000/skin-tones';
  private shirtColorsUrl = 'http://localhost:3000/shirt-colors';
  private pantsColorsUrl = 'http://localhost:3000/pants-colors';
  private shoeColorsUrl = 'http://localhost:3000/shoe-colors';
  private skinShirtUrls = 'http://localhost:3000/skin-shirts';
  private shirtPantsUrls = 'http://localhost:3000/shirt-pants';
  private pantsShoesUrls = 'http://localhost:3000/pants-shoes';

  constructor(private http: Http) { }

  getAll() {
    const skinTones = this.getSkinTones().map(res => res.json());
    const shirtColors = this.getShirtColors().map(res => res.json());
    const pantsColors = this.getPantsColors().map(res => res.json());
    const shoeColors = this.getShoeColors().map(res => res.json());
    const skinShirts = this.getSkinShirts().map(res => res.json());
    const shirtPants = this.getShirtPants().map(res => res.json());
    const pantsShoes = this.getPantsShoes().map(res => res.json());
    return Observable.forkJoin([skinTones, shirtColors, pantsColors, shoeColors, skinShirts, shirtPants, pantsShoes]);
  }

  getSkinTones() {
    return this.http.get(this.skinTonesUrl);
  }

  getShirtColors() {
    return this.http.get(this.shirtColorsUrl);
  }

  getPantsColors() {
    return this.http.get(this.pantsColorsUrl);
  }

  getShoeColors() {
    return this.http.get(this.shoeColorsUrl);
  }

  getSkinShirts() {
    return this.http.get(this.skinShirtUrls);
  }

  getShirtPants() {
    return this.http.get(this.shirtPantsUrls);
  }

  getPantsShoes() {
    return this.http.get(this.pantsShoesUrls);
  }

}

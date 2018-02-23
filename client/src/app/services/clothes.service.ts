import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/forkJoin';
import { environment } from '../../environments/environment';

@Injectable()
export class ClothesService {
  private skinTonesUrl = environment.apiUrl + '/skin-tones';
  private shirtColorsUrl = environment.apiUrl + '/shirt-colors';
  private pantsColorsUrl = environment.apiUrl + '/pants-colors';
  private shoeColorsUrl = environment.apiUrl + '/shoe-colors';
  private skinShirtUrls = environment.apiUrl + '/skin-shirts';
  private shirtPantsUrls = environment.apiUrl + '/shirt-pants';
  private pantsShoesUrls = environment.apiUrl + '/pants-shoes';

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

import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class WardrobeService {

  constructor(private authHttp: AuthHttp, private http: Http) {
  }

  getOutfits() {
    return this.authHttp.get('http://localhost:3000/api/wardrobe')
      .map(response => response.json());
  }

  saveOutfit(outfit) {
    return this.authHttp.post('http://localhost:3000/api/wardrobe', outfit)
      .map(response => response.json());
  }

  deleteOutfit(outfit) {
    console.log('deleting outfit: ', outfit);
    return this.authHttp.delete('http://localhost:3000/api/wardrobe/' + outfit.id)
      .map(response => response.json());
  }
}
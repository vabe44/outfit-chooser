import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { environment } from '../../environments/environment';

@Injectable()
export class WardrobeService {

  constructor(private authHttp: AuthHttp, private http: Http) {
  }

  getOutfits() {
    return this.authHttp.get(environment.apiUrl + '/api/wardrobe')
      .map(response => response.json());
  }

  getOutfit(id) {
    return this.authHttp.get(environment.apiUrl + '/api/wardrobe/' + id)
      .map(response => response.json());
  }

  saveOutfit(outfit) {
    return this.authHttp.post(environment.apiUrl + '/api/wardrobe', outfit)
      .map(response => response.json());
  }

  deleteOutfit(outfit) {
    console.log('deleting outfit: ', outfit);
    return this.authHttp.delete(environment.apiUrl + '/api/wardrobe/' + outfit.id)
      .map(response => response.json());
  }
}

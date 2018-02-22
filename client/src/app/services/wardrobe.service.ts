import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class WardrobeService {

  constructor(private authHttp: AuthHttp) {
  }

  getOutfits() {
    return this.authHttp.get('http://localhost:3000/skin-tones')
      .map(response => response.json());
  }

  saveOutfit(outfit) {
    console.log('saving outfit: ', outfit);
  }
}

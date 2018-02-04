import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ClothesService } from './services/clothes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Outfit Chooser';
  skinTones: any[];
  shirtColors: any[];
  pantsColors: any[];
  shoeColors: any[];
  skinShirts: any[];
  shirtPants: any[];
  pantsShoes: any[];

  constructor(private service: ClothesService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.skinTones = response[0];
      this.shirtColors = response[1];
      this.pantsColors = response[2];
      this.shoeColors = response[3];
      this.skinShirts = response[4];
      this.shirtPants = response[5];
      this.pantsShoes = response[6];
    });
  }

}

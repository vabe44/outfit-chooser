import { ShirtPants } from './../../../server/src/entity/ShirtPants';
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
  skinTones: any[] = [];
  shirtColors: any[] = [];
  pantsColors: any[] = [];
  shoeColors: any[] = [];
  skinShirts: any[] = [];
  shirtPants: any[] = [];
  pantsShoes: any[] = [];

  selectedSkinTone: any = {};
  selectedShirtColor: any = {};
  selectedPantsColor: any = {};
  selectedShoeColor: any = {};

  filteredSkinTones: any[] = [];
  filteredShirtColors: any[] = [];
  filteredPantsColors: any[] = [];
  filteredShoeColors: any[] = [];

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

      this.filteredSkinTones = Array.from(response[0]);
      this.filteredShirtColors = Array.from(response[1]);
      this.filteredPantsColors = Array.from(response[2]);
      this.filteredShoeColors = Array.from(response[3]);
    });
  }

  selectSkinTone(skinTone) {
    this.selectedSkinTone = skinTone;
    this.filteredShirtColors.length = 0;
    this.skinShirts.forEach(skinShirt => {
      if (skinShirt.skin_tone_id.id === this.selectedSkinTone.id) {
        this.filteredShirtColors.push(skinShirt.shirt_color_id);
      }
    });
  }

  selectShirtColor(shirtColor) {
    this.selectedShirtColor = shirtColor;
    this.filteredPantsColors.length = 0;
    this.shirtPants.forEach(shirtPants => {
      if (shirtPants.shirt_color_id.id === this.selectedShirtColor.id) {
        this.filteredPantsColors.push(shirtPants.pant_color_id);
      }
    });
  }

  selectPantsColor(pantsColor) {
    this.selectedPantsColor = pantsColor;

    // filter shoe colors
    this.filteredShoeColors.length = 0;
    this.pantsShoes.forEach(pantsShoes => {
      if (pantsShoes.pant_color_id.id === this.selectedPantsColor.id) {
        this.filteredShoeColors.push(pantsShoes.shoe_color_id);
      }
    });

    // check if shirt already selected
    if (this.selectedShirtColor.id) {
      // if shirt already selected, check if it matches with with pants
      // if it doesnt match with pants, delete selection and show matching shirts
      let selectedShirtMatches: boolean;
      this.shirtPants.forEach(ShirtPants => {
        if (this.selectedPantsColor.id === ShirtPants.pant_color_id.id) {
          selectedShirtMatches = true;
        }
      });

      if (!selectedShirtMatches) {
        this.selectedShirtColor = undefined;
      }

      // filter shirt colors
      this.filteredShirtColors.length = 0;
      this.shirtPants.forEach(shirtPants => {
        if (shirtPants.pant_color_id.id === this.selectedPantsColor.id) {
          this.filteredShirtColors.push(shirtPants.shirt_color_id);
        }
      });

    } else {
      // shirt not selected, filter shirts to show matching ones
      // filter shirt colors
      this.filteredShirtColors.length = 0;
      this.shirtPants.forEach(shirtPants => {
        if (shirtPants.pant_color_id.id === this.selectedPantsColor.id) {
          this.filteredShirtColors.push(shirtPants.shirt_color_id);
        }
      });
    }
  }

  selectShoeColor(shoeColor) {
    this.selectedShoeColor = shoeColor;
  }

  resetSkinTone() {
    this.selectedSkinTone = {};
    this.filteredSkinTones = Array.from(this.skinTones);
    this.filteredShirtColors = Array.from(this.shirtColors);
    this.resetShirtColor();
    console.log('skin tones', this.skinTones);
    console.log('filtered skin tones', this.filteredSkinTones);
  }

  resetShirtColor() {
    this.selectedShirtColor = {};
    this.filteredShirtColors = Array.from(this.shirtColors);
    this.filteredPantsColors = Array.from(this.pantsColors);
    this.resetPantsColor();
    console.log('shirt colors', this.pantsColors);
    console.log('shirt colors', this.filteredPantsColors);
  }

  resetPantsColor() {
    this.selectedPantsColor = {};
    this.filteredPantsColors = Array.from(this.pantsColors);
    this.filteredShoeColors = Array.from(this.shoeColors);
    this.resetShoeColor();
    console.log('pants colors', this.shoeColors);
    console.log('filtered pants colors', this.filteredShoeColors);
  }

  resetShoeColor() {
    this.selectedShoeColor = {};
    this.filteredShoeColors = Array.from(this.shoeColors);
    console.log('shoe colors', this.shoeColors);
    console.log('filtered shoe colors', this.filteredShoeColors);
  }

}

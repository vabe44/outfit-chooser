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

  selectedSkinTone: number;
  selectedShirtColor: number;
  selectedPantsColor: number;
  selectedShoeColor: number;

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

  selectSkinTone(skinToneId: number) {
    this.selectedSkinTone = skinToneId;
    this.filteredShirtColors.length = 0;
    this.skinShirts.forEach(skinShirt => {
      if (skinShirt.skin_tone_id.id === this.selectedSkinTone) {
        this.filteredShirtColors.push(skinShirt.shirt_color_id);
      }
    });
  }

  selectShirtColor(shirtColorId: number) {
    this.selectedShirtColor = shirtColorId;
    this.filteredPantsColors.length = 0;
    this.shirtPants.forEach(shirtPants => {
      if (shirtPants.shirt_color_id.id === this.selectedShirtColor) {
        this.filteredPantsColors.push(shirtPants.pant_color_id);
      }
    });
  }

  selectPantsColor(pantsColorId: number) {
    this.selectedPantsColor = pantsColorId;
    this.filteredShoeColors.length = 0;
    this.pantsShoes.forEach(pantsShoes => {
      if (pantsShoes.pant_color_id.id === this.selectedPantsColor) {
        this.filteredShoeColors.push(pantsShoes.shoe_color_id);
      }
    });
  }

  selectShoeColor(shoeColorId: number) {
    this.selectedShoeColor = shoeColorId;
  }

  resetSkinTone() {
    this.selectedSkinTone = undefined;
    this.filteredShirtColors = Array.from(this.shirtColors);
    this.resetShirtColor();
    console.log('skin tones', this.skinTones);
    console.log('filtered skin tones', this.filteredSkinTones);
  }

  resetShirtColor() {
    this.selectedShirtColor = undefined;
    this.filteredPantsColors = Array.from(this.pantsColors);
    this.resetPantsColor();
    console.log('shirt colors', this.pantsColors);
    console.log('shirt colors', this.filteredPantsColors);
  }

  resetPantsColor() {
    this.selectedPantsColor = undefined;
    this.filteredShoeColors = Array.from(this.shoeColors);
    this.resetShoeColor();
    console.log('pants colors', this.shoeColors);
    console.log('filtered pants colors', this.filteredShoeColors);
  }

  resetShoeColor() {
    this.selectedShoeColor = undefined;
    this.filteredShoeColors = Array.from(this.shoeColors);
    console.log('shoe colors', this.shoeColors);
    console.log('filtered shoe colors', this.filteredShoeColors);
  }

}

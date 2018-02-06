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

  currentStep: number;
  currentTask: string;
  currentlyChoosing: string;

  selectedSkinTone: any = false;
  selectedShirtColor: any = false;
  selectedPantsColor: any = false;
  selectedShoeColor: any = false;

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

    this.currentStep = 1;
    this.currentTask = 'Select one of the clothes to start:';
    this.currentlyChoosing = 'none';
  }

  checkIfSelected(currentlyChoosing) {

      if (currentlyChoosing === 'shirt' && !this.selectedShirtColor) {
        this.setCurrentlyChoosing(currentlyChoosing);
      }

      if (currentlyChoosing === 'pants' && !this.selectedPantsColor) {
        this.setCurrentlyChoosing(currentlyChoosing);
      }

      if (currentlyChoosing === 'shoes' && !this.selectedShoeColor) {
        this.setCurrentlyChoosing(currentlyChoosing);
      }
  }

  setCurrentlyChoosing(currentlyChoosing) {
    this.currentTask = `Select the color of your ${currentlyChoosing}:`;
    // nothing selected yet!
    if (!this.selectedShirtColor && !this.selectedPantsColor && !this.selectedPantsColor) {
      // 0
      console.log(0);
      this.currentlyChoosing = currentlyChoosing;
      this.currentStep = 2;
    } else if ( currentlyChoosing === 'shirt' && (this.selectedPantsColor || this.selectedShoeColor) )  {
      // 1
      console.log(1);
      this.currentlyChoosing = 'shirt';
      this.currentStep = 3;
    } else if ( currentlyChoosing === 'pants' && (this.selectedShirtColor || this.selectedShoeColor) )  {
      // 2
      console.log(2);
      this.currentlyChoosing = 'pants';
      this.currentStep = 3;
    } else if ( currentlyChoosing === 'shoes' && (this.selectedShirtColor || this.selectedPantsColor) )  {
      // 3
      console.log(3);
      this.currentlyChoosing = 'shoes';
      this.currentStep = 3;
    } else if ( currentlyChoosing === 'shirt' && (this.selectedPantsColor && this.selectedShoeColor) )  {
      // 4
      console.log(4);
      this.currentlyChoosing = 'shirt';
      this.currentStep = 4;
    } else if ( currentlyChoosing === 'pants' && (this.selectedShirtColor && this.selectedShoeColor) )  {
      // 5
      console.log(5);
      this.currentlyChoosing = 'pants';
      this.currentStep = 4;
    } else if ( currentlyChoosing === 'shoes' && (this.selectedShirtColor && this.selectedPantsColor) )  {
      // 6
      console.log(6);
      this.currentlyChoosing = 'shoes';
      this.currentStep = 4;
    } else {
      console.log('errorrrrrrrrrrrrrrrr');
    }
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
        this.selectedShirtColor = false;
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
    this.selectedSkinTone = false;
    this.filteredSkinTones = Array.from(this.skinTones);
    this.filteredShirtColors = Array.from(this.shirtColors);
    this.resetShirtColor();
    console.log('skin tones', this.skinTones);
    console.log('filtered skin tones', this.filteredSkinTones);
  }

  resetShirtColor() {
    this.selectedShirtColor = false;
    this.filteredShirtColors = Array.from(this.shirtColors);
    this.filteredPantsColors = Array.from(this.pantsColors);
    this.resetPantsColor();
    console.log('shirt colors', this.pantsColors);
    console.log('shirt colors', this.filteredPantsColors);
  }

  resetPantsColor() {
    this.selectedPantsColor = false;
    this.filteredPantsColors = Array.from(this.pantsColors);
    this.filteredShoeColors = Array.from(this.shoeColors);
    this.resetShoeColor();
    console.log('pants colors', this.shoeColors);
    console.log('filtered pants colors', this.filteredShoeColors);
  }

  resetShoeColor() {
    this.selectedShoeColor = false;
    this.filteredShoeColors = Array.from(this.shoeColors);
    console.log('shoe colors', this.shoeColors);
    console.log('filtered shoe colors', this.filteredShoeColors);
  }

}

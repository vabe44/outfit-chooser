import { IOutfit } from './../interface/Outfit';
import { IClothing } from './../interface/Clothing';
import { Component, OnInit } from '@angular/core';
import { WardrobeService } from './../services/wardrobe.service';

@Component({
  selector: 'app-wardrobe',
  templateUrl: './wardrobe.component.html',
  styleUrls: ['./wardrobe.component.css']
})
export class WardrobeComponent implements OnInit {
  outfits: any = [];
  selectedOutfit: IOutfit;

  constructor(private wardrobeService: WardrobeService) { }

  ngOnInit() {
    this.wardrobeService.getOutfits()
      .subscribe(outfits => {
        this.outfits = outfits;
        this.selectedOutfit = this.outfits[0];
      });
  }

  showOutfit(outfit) {
    this.selectedOutfit = outfit;
  }

  deleteOutfit(outfit) {
    const shouldDelete = confirm('Are you sure you want to delete this outfit?');
    if (shouldDelete) {
      console.log('OK, deleting outfit!', this.selectedOutfit);
      this.wardrobeService.deleteOutfit(outfit)
        .subscribe(response => console.log(response));
    }
  }
}
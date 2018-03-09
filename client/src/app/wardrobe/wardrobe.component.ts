import { IOutfit } from './../interface/Outfit';
import { IClothing } from './../interface/Clothing';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WardrobeService } from './../services/wardrobe.service';

@Component({
  selector: 'app-wardrobe',
  templateUrl: './wardrobe.component.html',
  styleUrls: ['./wardrobe.component.css']
})
export class WardrobeComponent implements OnInit {
  outfits: any = [];

  constructor(private wardrobeService: WardrobeService) { }

  ngOnInit() {

    this.wardrobeService.getOutfits()
      .subscribe(outfits => this.outfits = outfits);
  }

  deleteOutfit(outfit) {
    const shouldDelete = confirm('Are you sure you want to delete this outfit?');
    if (shouldDelete) {
      console.log('OK, deleting outfit!', outfit);
      this.outfits.splice(this.outfits.indexOf(outfit), 1);
      this.wardrobeService.deleteOutfit(outfit)
        .subscribe(response => console.log(response));
    }
  }
}

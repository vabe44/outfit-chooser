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

  selectedShirt: IClothing;
  selectedPants: IClothing;
  selectedShoes: IClothing;

  constructor(private wardrobeService: WardrobeService) { }

  ngOnInit() {
    // this.wardrobeService.getOutfits()
    //   .subscribe(outfits => this.outfits = outfits);
    const outfit = {
      shirt: {
        id: 15,
        color: 'Navy Blue',
        colorcode: '#000080',
      },
      pants: {
        id: 1,
        color: 'Black',
        colorcode: '#000000',
      },
      shoes: {
        id: 5,
        color: 'Burgundy',
        colorcode: '#800020',
      }
    };
    this.outfits.push(outfit);
    this.setOutfit(0);
  }

  setOutfit(index: number) {
    this.selectedShirt = this.outfits[index].shirt;
    this.selectedPants = this.outfits[index].pants;
    this.selectedShoes = this.outfits[index].shoes;
  }

}

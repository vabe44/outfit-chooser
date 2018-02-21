import { Component, OnInit } from '@angular/core';
import { WardrobeService } from './../services/wardrobe.service';

@Component({
  selector: 'app-wardrobe',
  templateUrl: './wardrobe.component.html',
  styleUrls: ['./wardrobe.component.css']
})
export class WardrobeComponent implements OnInit {
  outfits: any[];

  constructor(private wardrobeService: WardrobeService) { }

  ngOnInit() {
    this.wardrobeService.getOutfits()
      .subscribe(outfits => this.outfits = outfits);
  }

}

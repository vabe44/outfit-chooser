import { Component, OnInit } from '@angular/core';
import { WardrobeService } from '../services/wardrobe.service';
import { IOutfit } from '../interface/Outfit';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wardrobe-item',
  templateUrl: './wardrobe-item.component.html',
  styleUrls: ['./wardrobe-item.component.css']
})
export class WardrobeItemComponent implements OnInit {

  outfit: IOutfit;
  modelUrl: string;

  constructor(private route: ActivatedRoute, private wardrobeService: WardrobeService) { }

  ngOnInit() {
    this.wardrobeService.getOutfit(this.route.snapshot.params.outfitId)
    .subscribe(outfit => {
      this.outfit = outfit;
      console.log(this.outfit);
    });
    this.modelUrl = 'assets/images/business-casual-male.svg';
  }

}

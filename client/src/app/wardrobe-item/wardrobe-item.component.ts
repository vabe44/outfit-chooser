import { Component, OnInit } from '@angular/core';
import { WardrobeService } from '../services/wardrobe.service';
import { IOutfit } from '../interface/Outfit';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wardrobe-item',
  templateUrl: './wardrobe-item.component.html',
  styleUrls: ['./wardrobe-item.component.css']
})
export class WardrobeItemComponent implements OnInit {

  outfit: IOutfit;
  editMode: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wardrobeService: WardrobeService) { }

  ngOnInit() {
    this.wardrobeService.getOutfit(this.route.snapshot.params.outfitId)
    .subscribe(outfit => {
      this.outfit = outfit;
    });
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  deleteOutfit() {
    const shouldDelete = confirm('Are you sure you want to delete this outfit?');
    if (!shouldDelete) { return; }
    console.log('OK, deleting outfit!', this.outfit);
    this.wardrobeService.deleteOutfit(this.outfit)
      .subscribe(response => {
        response.deleted ? this.router.navigate(['/wardrobe']) : alert(response.message);
      });
  }
}

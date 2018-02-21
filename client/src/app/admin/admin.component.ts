import { ClothesService } from './../services/clothes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  shirtColors: any[];

  constructor(private clothesService: ClothesService) { }

  ngOnInit() {
    this.clothesService.getAll()
      .subscribe(response => this.shirtColors = response[1]);
  }
}

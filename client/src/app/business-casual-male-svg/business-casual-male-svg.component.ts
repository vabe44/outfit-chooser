import { IOutfit } from './../interface/Outfit';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-business-casual-male-svg',
  templateUrl: './business-casual-male-svg.component.html',
  styleUrls: ['./business-casual-male-svg.component.css']
})
export class BusinessCasualMaleSvgComponent {

  @Input() outfit: IOutfit;

}

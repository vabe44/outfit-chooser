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
  selectedOutfit: IOutfit;

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D ;
  container: any;
  cw: any;
  ch: any;

  modelUrl: string;

  constructor(private wardrobeService: WardrobeService) { }

  ngOnInit() {
    this.modelUrl = 'assets/images/business-casual-male.svg';
    this.wardrobeService.getOutfits()
      .subscribe(outfits => {
        this.outfits = outfits;
        this.selectedOutfit = this.outfits[0];
      });
  }


  recolorImage(outfit): void {
    const image = <HTMLImageElement>document.getElementById('model' + outfit.id);
    // console.log(image);
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = image.width;
    this.canvas.height = image.height;

    // draw the image on the temporary canvas
    this.ctx.drawImage(image, 0, 0, image.width, image.height);
    // pull the entire image into an array of pixel data
    const imageData = this.ctx.getImageData(0, 0, image.width, image.height);
    // console.log(imageData);
    // examine every pixel,
    // change any old rgb to the new-rgb
    const shirtColors = this.hexToRgb(outfit.shirt.colorcode);
    const pantsColors = this.hexToRgb(outfit.pants.colorcode);
    const shoesColors = this.hexToRgb(outfit.shoes.colorcode);

    for (let i = 0; i < imageData.data.length; i += 4) {
      // is this pixel the old rgb?

      // shirt
      if (imageData.data[i] === 20 && imageData.data[i + 1] === 78 && imageData.data[i + 2] === 197) {
        // console.log('pixel to change found');
        // change to your new rgb
        imageData.data[i] = shirtColors[0];
        imageData.data[i + 1] = shirtColors[1];
        imageData.data[i + 2] = shirtColors[2];
      // pants
      } else if (imageData.data[i] === 179 && imageData.data[i + 1] === 179 && imageData.data[i + 2] === 179) {
        imageData.data[i] = pantsColors[0];
        imageData.data[i + 1] = pantsColors[1];
        imageData.data[i + 2] = pantsColors[2];
      // shoes
      } else if (imageData.data[i] === 120 && imageData.data[i + 1] === 68 && imageData.data[i + 2] === 33) {
        imageData.data[i] = shoesColors[0];
        imageData.data[i + 1] = shoesColors[1];
        imageData.data[i + 2] = shoesColors[2];
      }
    }
    // put the altered data back on the canvas
    this.ctx.putImageData(imageData, 0, 0);
    // const canvasContainer = document.getElementById('canvas-container' + outfit.id);
    // canvasContainer.style.width = image.width.toString();
    // canvasContainer.style.height = image.height.toString();
    // canvasContainer.appendChild(this.canvas);
    // put the re-colored image back on the image
    const img1 = <HTMLImageElement>document.getElementById('recoloredModel' + outfit.id);
    // tslint:disable-next-line:max-line-length
    img1.src = this.canvas.toDataURL('image/png');
  }

  showOutfit(outfit) {
    console.log(outfit);
    this.selectedOutfit = outfit;
  }

  deleteOutfit(outfit) {
    const shouldDelete = confirm('Are you sure you want to delete this outfit?');
    if (shouldDelete) {
      console.log('OK, deleting outfit!', this.selectedOutfit);
      this.outfits.splice(this.outfits.indexOf(outfit), 1);
      if (this.outfits.length) { this.selectedOutfit = this.outfits[0]; }
      this.wardrobeService.deleteOutfit(outfit)
        .subscribe(response => console.log(response));
    }
  }

  hexToRgb(hex) {
    return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
      , (m, r, g, b) => '#' + r + r + g + g + b + b)
      .substring(1).match(/.{2}/g)
      .map(x => parseInt(x, 16));
    // return [90, 4, 214];
  }
}

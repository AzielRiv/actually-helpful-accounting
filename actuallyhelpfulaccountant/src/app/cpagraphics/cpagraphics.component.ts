import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { graphics } from './graphics';


export interface GraphicItem {
  image: string;
}

export interface graphics {
  graphic1: GraphicItem[];
  herographic: GraphicItem[];
  graphic2: GraphicItem[];
  plane: GraphicItem[];
  growth: GraphicItem[];
  paperwork: GraphicItem[];
  sales: GraphicItem[];
  wallet: GraphicItem[];
  documenting: GraphicItem[];
  city: GraphicItem[];
  problemsolve: GraphicItem[];
  assistant: GraphicItem[];
  newmessage: GraphicItem[];
  dataconcepts: GraphicItem[];
}


@Component({
  selector: 'app-cpagraphics',
  templateUrl: './cpagraphics.component.html',
  styleUrls: ['./cpagraphics.component.scss'],
  standalone: false
})

export class CpagraphicsComponent {
  // @Input() graphics!: { image: string }[]; // Expecting an array of objects with an "image" property
  @Input() graphics: { image: string }[] = [];
  MainPhotoStyle: any;
  MainPhotoHolderStyle: any;

  // graphics: GraphicsCollection = {
  //   tileline: [{ image: 'assets/images/tilestyle-line-graphic.png' }],
  //   trenotriangles: [{ image: 'assets/images/frame360.png' }]
  // };
}


import { Component } from '@angular/core';
import { CpagraphicsComponent } from '../cpagraphics/cpagraphics.component';

import { IonContent, IonRow, IonCol, IonGrid, IonText, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  navigateTo(Link: string){
    window.open(Link);
  }

  graphics: {
    herographic: { image: string }[];
    graphic1: { image: string }[];
    graphic2: { image: string }[];
    city: { image: string }[];
    plane: { image: string }[];
    paperwork: { image: string }[];
    sales: { image: string }[];
    documenting: { image: string }[];
    wallet: { image: string }[];
    growth: { image: string }[];
    problemsolve: { image: string }[];
    newmessage: { image: string }[];
    assistant: { image: string }[];
  } = {

    
      herographic: [
        { image: 'assets/graphics/hero-graphic.png' }
      ],
      graphic1: [
        { image: 'assets/graphics/graphic-1.png' }
      ],
      graphic2: [
        { image: 'assets/graphics/graphic-2.png' }
      ],
        city: [
        { image: 'assets/graphics/city-graphic.png' }
      ],
         plane: [
        { image: 'assets/graphics/paper-plane.png' }
      ],
         paperwork: [
        { image: 'assets/graphics/paperwork.png' }
      ],
         sales: [
        { image: 'assets/graphics/salesreport.png' }
      ],
         documenting: [
        { image: 'assets/graphics/documents.png' }
      ],
         wallet: [
        { image: 'assets/graphics/wallet.png' }
      ],
         growth: [
        { image: 'assets/graphics/growth.png' }
      ],
        newmessage: [
        { image: 'assets/graphics/newmessages.png' }
      ],
          assistant: [
        { image: 'assets/graphics/virtualassistant.png' }
      ],
          problemsolve: [
        { image: 'assets/graphics/solvedtheproblem.png' }
      ]
    };


  MainActions = [
    {
      title: 'TRENO History',
      image: 'assets/images/history_item.jpeg',
      url: '/history',
      subtitle: 'Learn more about the history and culture of the TRENO organization.'
    },
    {
      title: 'Upcoming Events',
      image: 'assets/images/community_gal/community_bikeride.jpeg',
      url: '/newsletter',
      subtitle: 'Upcoming dates, times, and locations for meetings, events, and other community activities.'
    },
    {
      title: 'Become a Board Member',
      image: 'assets/images/leaders_gal/leadership_speach.jpeg',
      url: '/directors-page',
      subtitle: 'Become a member of the TRENO Board of Directors.'
    },
  ];
}

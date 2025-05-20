import { Component } from '@angular/core';
import { appRouteKey } from '../app.ENV'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: 'services.html',
  styleUrls: ['services.page.scss'],
  standalone: false
})

export class ServicesPage {
   constructor(private router: Router){}

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
    dataconcepts: { image: string }[];
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
      ],
          dataconcepts: [
        { image: 'assets/graphics/ concept-of-data-analysis-and-maintenance-2040897_Reveal.json' }
      ],
    };



  routeToHistory(){
    this.router.navigate([appRouteKey.faqs.path]);
  }
  routeToContact(){
    this.router.navigate([appRouteKey.contact.path]);
  }

 StarWalk() {
    window.open('https://www.palmsprings.com/walk-of-stars/', '_blank');
  }
}


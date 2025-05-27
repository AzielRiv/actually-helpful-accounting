import { Component } from '@angular/core';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false,
  
})
export class ContactComponent  {

 
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
        { image: 'assets/graphics/concept-of-data-analysis-and-maintenance-2040897_Reveal.json' }
      ],
    };
    

}


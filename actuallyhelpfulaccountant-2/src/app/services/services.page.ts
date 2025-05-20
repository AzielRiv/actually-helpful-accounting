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


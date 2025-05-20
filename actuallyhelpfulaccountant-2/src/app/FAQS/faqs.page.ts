import { Component } from '@angular/core';
import { appRouteKey } from '../app.ENV'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-history',
  templateUrl: 'faqs.page.html',
  styleUrls: ['faqs.page.scss'],
  standalone: false
})

export class FaqsPage {
   constructor(private router: Router){}


  timeline1 = [
    { date: '1770s', title: 'Exploration by Fray Francisco Garces', description: 'In the early 1770s, the Wandering Franciscan, Fray Francisco Garces, explored the foot of the San Jacinto Mountains. Shortly thereafter, Don Juan Bautista de Anza made a solo journey across the desert from present-day Tubac, Arizona to an area just south of Palm Springs.', image: 'assets/History/don-juan-bautista-de-anza.jpg' },
    { date: '1850s - 1900s', title: 'The Discovery of Palm Springs', description: 'Palm Springs was discovered by a government survey team sent out to find a railroad route to the Pacific in 1853, but was previously inhabited by Native Americans. In 1876, the United States government established the Agua Caliente Reservation, meaning "hot water" Reservation.', image: 'assets/images/history_timeline/history_timeline_spanishrev.jpeg' },
    { date: '1930s', title: 'The Spanish Revival Movement', description: 'On April 18th, 1938, Palm Springs was officially deemed a city. One of the first developments was called Palos Verdes Estates and is still populated with charming "Old Palm Springs" Spanish revival homes. Around this time, famous residents also populated the beautiful palm springs, leading to the opening of "The Racquet Club" in 1934', image: 'assets/images/history_timeline/history_timeline_building_illustration.jpeg' },
    { date: '1940s', title: 'Paul Trousdale Mid-Century Modern Movement', description: 'In 1947, famous architect Paul Trousdale began building here, peppering the neighborhood with mid-century-style homes.', image: 'assets/images/history_timeline/history_timeline+TAHQUITZ+RIVER+ESTATES.png' },
  ];

  timeline2 = [
    { date: '1950s', title: 'Cameron Center and the Golden Mile of Tahquitz River Estates', description: 'The unfinished construction site at South Palm Canyon Drive and East Mesquite Avenue was once a source of pride for Tahquitz River Estates and the City of Palm Springs.', image: 'assets/images/history_timeline/history_timeline_3guys.jpeg' },
    { date: 'Today', title: 'The Future of Tahquitz River Estates', description: "Palm Springs as well as the Coachella Valley have seen many changes through the years, and continue to renew and grow. Today, it is known as the Golf Capital of the world.", image: 'assets/images/history_timeline/history_timeline_grassfeild.jpeg' },
  ];

  
  backgroundImages: string[] = [
    '/assets/Top Homepage Section/Interior with Wallpaper.jpg',
    '/assets/Top Homepage Section/Exterior front Door.jpg',
    '/assets/Top Homepage Section/Exterior with Pool.jpg',
    '/assets/Top Homepage Section/Interior with Fireplace.jpg',
    '/assets/Top Homepage Section/Interior with Wallpaper.jpg',
    '/assets/Top Homepage Section/Interior with Plants.jpg',
    // Add more image paths as needed
  ];

  currentBackgroundIndex = 0;

  ngOnInit() {
    this.injectKeyframes();
    this.startBackgroundChange();
  }

  injectKeyframes() {
    const keyframes = this.generateKeyframes();
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);
  }

  generateKeyframes(): string {
    let keyframes = '@keyframes changeBackground {';
    const step = 100 / this.backgroundImages.length;

    this.backgroundImages.forEach((image, index) => {
      keyframes += `
        ${index * step}% {
          background-image: url('${image}');
        }
      `;
    });

    keyframes += `
      100% {
        background-image: url('${this.backgroundImages[0]}');
      }
    `;

    keyframes += '}';
    return keyframes;
  }

  startBackgroundChange() {
    setInterval(() => {
      this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgroundImages.length;
    }, 9000); // Change image every 6 seconds
  }

  
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

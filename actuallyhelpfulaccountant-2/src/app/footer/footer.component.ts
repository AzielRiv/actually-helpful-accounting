import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false
})
export class FooterComponent {

  TrenoIG() {
    window.open('https://www.instagram.com/tahquitzriverestates?igsh=NTc4MTIwNjQ2YQ==', '_blank');
  }

  Modernism() {
    window.open('https://modernismweek.com/2025/', '_blank');
  }

}
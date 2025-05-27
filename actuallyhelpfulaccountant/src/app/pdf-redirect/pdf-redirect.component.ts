import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-redirect',
  templateUrl: './pdf-redirect.component.html',
  styleUrls: ['./pdf-redirect.component.scss'],
  standalone: false,
})
export class PdfRedirectComponent {
  constructor() {
    window.location.href = '/assets/pdfs/Tahquitz River Estates Neighborhood Organization-NY Letter (v2).pdf';
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: false,
  animations: [
    trigger('fadeAnimation', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', [
        animate('0.5s')
      ]),
      transition('hidden => visible', [
        animate('0.5s')
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {
  @Input() gallery!: {image: string}[];
  @Input() MainPhotoStyle: string = '';
  @Input() MainPhotoHolderStyle: string = '';
  @Input() GalleryType: 'gallery' | 'carousel' | 'circular' = 'carousel';
  @Input() CircleTitle: string = '';
  @Input() CircleSubTitle: string = '';

  ngOnInit() {
    if (this.GalleryType === 'circular') {
      this.gallery = this.gallery.slice(0, 12); // prevent design error
    }
  }
  
  currentIndex = 0;
  animationState = 'visible';

  showPhoto(index: number) {
    this.animationState = 'hidden';
    setTimeout(() => {
      this.currentIndex = index;
      this.animationState = 'visible';
    }, 500);
  }

  nextPhoto() {
    this.animationState = 'hidden';
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.gallery.length;
      this.animationState = 'visible';
    }, 500);
  }

  prevPhoto() {
    this.animationState = 'hidden';
    setTimeout(() => {
      this.currentIndex = (this.currentIndex - 1 + this.gallery.length) % this.gallery.length;
      this.animationState = 'visible';
    }, 500);
  }

  isPopupVisible = false;
  popupImage = '';
  showPopup(image: string) {
    this.popupImage = image;
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }

}

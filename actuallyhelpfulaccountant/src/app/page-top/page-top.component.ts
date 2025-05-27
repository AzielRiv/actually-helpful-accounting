import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-top',
  templateUrl: './page-top.component.html',
  styleUrls: ['./page-top.component.scss'],
  standalone: false
})
export class PageTopComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() Title!: string;
  @Input() Subtitle!: string;
  @Input() LinesStyle: any = '';
  @Input() BackgroundHolder: any = ''; 

}

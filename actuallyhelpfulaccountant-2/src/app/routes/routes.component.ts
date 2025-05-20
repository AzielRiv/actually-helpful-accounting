import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
// import { AboutComponent } from './about/about.component';
// import { SocialComponent } from './social/social.component';

export const appRoutes: Routes = [
  // { path: 'about', component: AboutComponent },
  // { path: 'social', component: SocialComponent },
  // ...other routes
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];


@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss'],
  standalone: true,
})
export class RoutesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

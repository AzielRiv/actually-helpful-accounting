import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { GlobalInitializer } from 'my-library';
import { filter } from 'rxjs/operators';
import { RoutingArray, Globals_App, DomainAPI } from './app.ENV';
import { IndexedDBService} from 'my-library';
import {USER_META} from './profileMeta';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})

export class AppComponent implements OnInit {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  RENDER: boolean = false; // Set RENDER to true when config is successfully loaded
  private globalConfig: any;
  private globalSubscription!: Subscription;
  private routerSubscription!: Subscription;
  ShowHeaderFooter: boolean = true;

  constructor(
    private globalInitializer: GlobalInitializer,
    private router: Router,
  ) {

    // Dynamic Icons * can probably initialize the entire app icons here ***
    // Currently used from the settings component
    // addIcons({
    //   settingsOutline,
    //   personOutline,
    //   checkmarkOutline
    // });
   }

  ngOnInit() {
    // GLOBAL INITIALIZER - runs once on init - can move to 
    this.globalSubscription = this.globalInitializer.initGlobals(Globals_App, RoutingArray, DomainAPI, USER_META).subscribe( async (config: any) => {
      this.globalConfig = config;
      
      if (config.CONFIG.DEBUG === true) {
        console.log('ROUTES', this.globalInitializer.getRoutes());
      }

      // Signals to render the App
      this.ShowHeaderFooter = await this.globalInitializer.showHeaderFooter(this.globalConfig?.SETTINGS?.NoHeadFoot);
      this.loadingSubject.next(false);
    }, (error: any) => {
      this.loadingSubject.next(false);
    });

    // ROUTING HANDLER
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(async () => {
      this.ShowHeaderFooter = await this.globalInitializer.showHeaderFooter(this.globalConfig?.SETTINGS?.NoHeadFoot);
      window.scrollTo(0, 0);
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (this.globalSubscription) {
      this.globalSubscription.unsubscribe();
    }
  }

}

export const pagenav = {

  // About: { path: '/about', canActivate: true, icon: 'about-icon', title: 'About' },
  // Social: { path: '/social', canActivate: true, icon: 'social-icon', title: 'Social' },
  // History: { path: '/history', canActivate: false, icon: 'history-icon', title: 'History' },
  // Directors: { path: '/directors', canActivate: true, icon: 'directors-icon', title: 'Directors' },

};
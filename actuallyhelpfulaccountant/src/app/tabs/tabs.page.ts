import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { appsOutline } from 'ionicons/icons';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonText, IonButton, IonRow, IonCard, IonList, IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, home, mail, menuOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  // standalone: true,
  // imports: [IonItem, IonList, IonCard, IonRow, IonButton, IonText, IonContent, IonTab, IonTitle, IonButtons, IonToolbar, IonHeader, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage implements OnInit{
  public environmentInjector = inject(EnvironmentInjector);
  private routerSubscription!: Subscription;
  constructor(private route: ActivatedRoute, private router: Router, private platform: Platform, private navCtrl: NavController) {
  }
  //redirect because library is not compatible with path: ___, redirect: _____
  ngOnInit() {
    this.isDesktop = this.platform.width() > 768; // Adjust this value as needed
    this.platform.resize.subscribe(() => {
      this.isDesktop = this.platform.width() > 768;
    });
    // Check for initial empty route
    if (this.router.url === '/' || this.router.url === '') {
      this.router.navigate(['/home']);
    }
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentPath = this.router.url.split('/').pop();
      if (currentPath === '') {
        this.router.navigate(['/home']);
      }
    });
  }

  isDesktop!: boolean;
  showDropdown = false;
  appsOutline = appsOutline; // ion icons
  
  navItems = [
    { tab: 'home', href: '/home', label: 'Home', icon: '' },
    { tab: 'about', href: '/about', label: 'About', icon: '' },
    { tab: "faqs", href: '/faqs', label: "FAQ's", icon: '' },
    { tab: 'contact', href: '/contact', label: 'Contact Us', icon: '' },
  ];


  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  navigateTo(href: string) {
    this.navCtrl.navigateRoot(href);
    this.showDropdown = false;
  }
  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

}


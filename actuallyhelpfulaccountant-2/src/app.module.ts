import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app/app.component';
// Library //////////////////////////////////////////////////////////////////
import { MyLibraryModule } from 'my-library';
// Routes and INIT
import { GlobalInitializer } from 'my-library';
import { FaqsPage } from './app/FAQS/faqs.page';
import { WelcomeComponent } from './app/welcome.component';
import { AboutPage } from './app/About/about.page';
import { FooterComponent } from './app/footer/footer.component';
import { ContactComponent } from './app/contact/contact.component';
import { GalleryComponent } from './app/gallery/gallery.component';
import { PageTopComponent } from './app/page-top/page-top.component';
import { CpagraphicsComponent } from './app/cpagraphics/cpagraphics.component';
import { HomePage } from './app/home/home.page';
import { ServicesPage } from './app/services/services.page';
import { DropdownComponent } from './app/dropdown/dropdown.component';


@NgModule({
  declarations: [
    AppComponent, 
    FaqsPage,
    ServicesPage,
    WelcomeComponent, 
    FooterComponent, 
    ContactComponent,
    GalleryComponent,
    PageTopComponent,
    CpagraphicsComponent,
    HomePage,
    AboutPage,
    DropdownComponent,
  

   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    RouterModule.forRoot([]),
    MyLibraryModule
  ],
  providers: [
    GlobalInitializer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
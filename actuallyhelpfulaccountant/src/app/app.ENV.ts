///////////////////////////////////////////////////////////////////////////
//v 3/9/25

/*
  CONFIGURATION
  Domain: The domain of the API to connect to 
*/
export var DomainAPI: string = 'https://trenops.com/CORE_FE/GATEWAY.php';

/*
  SETUP Routing Array
  Import all components that will be used in the app here
  RestrictAcess: true = User must be logged in to access the page
*/
import { RouteInfo } from 'my-library';
import { FaqsPage } from './FAQS/faqs.page';
import { ServicesPage } from './services/services.page';
import { WelcomeComponent } from './welcome.component';
import { ContactComponent } from './contact/contact.component';
import { PdfRedirectComponent } from './pdf-redirect/pdf-redirect.component';
import { HomePage } from './home/home.page';
import { AboutPage } from './About/about.page';


/*
  In development - used to configure all the routes dynamically and associated settings 
  // to be IMPLMENTED to work with ROUTING ARRAY 
  // can be done in library as for loop?
*/
// export var  
// selector: 'app-pdf-redirect',
// template: `<p>Redirecting...</p>`

export var appRouteKey = {
  home: { label: 'Home', component: HomePage, path: '/home', icon: '' },
  about: { label: 'About', component: AboutPage, path: '/about', icon: '' },
  services: { label: 'Services', component: ServicesPage, path: '/services', icon: '' },
  faqs: { label: "FAQ's", component: FaqsPage, path: '/faqs', icon: '' },
  contact: { label: 'Contact Us', component: ContactComponent, path: '/contact', icon: '' },
  pdfredirect: { label: 'pdfredirect', component: PdfRedirectComponent, path: '/pdf-redirect'}
};

// TO BE REPLACED WITH APP KEY - instead this is constructed in library with app route key 
export var RoutingArray: RouteInfo[] = [
  { path: 'home', component: HomePage },
  { path: 'about', component: AboutPage },
  {path: 'services', component: ServicesPage},
  { path: 'faqs', component: FaqsPage },
  { path: 'contact', component: ContactComponent },
  { path: 'pdf-redirect', component: PdfRedirectComponent},

];

/*
  Globals_App: Global variables that will be used throughout the app
  - NO variables allowed 
*/
export var Globals_App: any = {
  
  Nav_Header_Public: [
    { path: appRouteKey.home.path, label: appRouteKey.home.label },
    { path: appRouteKey.about.path, label: appRouteKey.about.label },
    { path: appRouteKey.services.path, label: appRouteKey.services.label },
    { path: appRouteKey.faqs.path, label: appRouteKey.faqs.label },
    { path: appRouteKey.contact.path, label: appRouteKey.contact.label },
    //{path: appRouteKey.pdfredirect.path, label: appRouteKey.pdfredirect.label},
    // { path: appRouteKey.contact.path, label: appRouteKey.Letter.label },
  ],
    // UserNav_Footer: [
    //   { icon: 'meet', label: 'Connect', path: '/match' },
    //   { icon: 'guide', label: 'Guide', path: '/guide' },
    //   { icon: 'chat', label: 'Messages', path: '/messages' }
    // ]
};


///////////////////////////////////////////////////////////////////////////

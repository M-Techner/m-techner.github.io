import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { BuyAHorseComponent } from './buy-a-horse/buy-a-horse.component';
import { SellYourHorseComponent } from './sell-your-horse/sell-your-horse.component';
import { OtherServicesComponent } from './other-services/other-services.component';
import { ContactComponent } from './contact/contact.component';



// add a new routes array to store the paths 
export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: LandingComponent },
    { path: 'about', component: AboutComponent },
    { path: 'buy-a-horse', component: BuyAHorseComponent },
    { path: 'sell-your-horse', component: SellYourHorseComponent },
    { path: 'other-services', component: OtherServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full'}

];

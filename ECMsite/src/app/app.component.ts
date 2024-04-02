import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeroComponent } from "./hero/hero.component";
import { NavComponent } from "./nav/nav.component";
import { LandingComponent } from './landing/landing.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeroComponent, NavComponent, LandingComponent, FooterComponent]
})
export class AppComponent {
  title = 'ECMsite';
}

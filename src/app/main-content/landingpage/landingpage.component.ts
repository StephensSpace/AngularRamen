import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component' ;


@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [RouterOutlet, NavbarComponent],
    template: `<section>
                <app-navbar></app-navbar>
                <h1 class="ralewayBold">SAKURA RAMEN</h1>
                <h2 class="ralewayReg">THE BEST RAMEN IN TOWN</h2>
                </section>`,
    styleUrl: `./landingpage.component.scss`

})
export class LandingPageComponent {

}
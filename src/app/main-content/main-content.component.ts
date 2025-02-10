import { Component } from '@angular/core';
import { LandingPageComponent } from "./landingpage/landingpage.component";
import { OurMenuComponent } from './our-menu/our-menu.component';
import { HowToOrderComponent } from "./how-to-order/how-to-order.component";
import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  selector: 'app-main-content',
  imports: [LandingPageComponent, OurMenuComponent, HowToOrderComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}

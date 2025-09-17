import { AfterViewInit, Component } from '@angular/core';
import { fadeSlide } from './navbar.animations';
import * as feather from 'feather-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [fadeSlide]
})


export class NavbarComponent implements AfterViewInit{
 // This value will be updated dynamically in a real application,
  // for example, via a service or state management.
  cartCount = 3; 

  ngAfterViewInit() {
    feather.replace();
  }


}

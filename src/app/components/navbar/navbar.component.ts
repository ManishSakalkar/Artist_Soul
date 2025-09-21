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

 isLoggedIn = false;
  showAuthModal = false;
  userName = '';


  openAuthModal(): void {
    this.showAuthModal = true;
  }

  closeAuthModal(): void {
    this.showAuthModal = false;
  }

  handleLoginSuccess(name: string): void {
    this.userName = name;
    this.isLoggedIn = true;
    this.closeAuthModal();
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userName = '';
  }


}

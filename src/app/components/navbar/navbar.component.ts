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
  errorMessage!: string;

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
handleLogin(name: string, email: string, password: string): void {
  this.errorMessage = '';

  if (!name.trim() || !email.trim() || !password.trim()) {
    this.errorMessage = 'All fields are required.';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    this.errorMessage = 'Please enter a valid email address.';
    return;
  }

  if (password.length < 6) {
    this.errorMessage = 'Password must be at least 6 characters.';
    return;
  }

  this.userName = name;
  this.isLoggedIn = true;
  this.closeAuthModal();
}


}

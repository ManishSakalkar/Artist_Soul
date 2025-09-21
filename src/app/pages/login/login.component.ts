import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 @Output() close = new EventEmitter<void>();
@Output() loginSuccess = new EventEmitter<string>();

userName = '';
email = '';
password = '';
errorMessage = '';

handleLogin(): void {
  if (!this.userName || !this.email || !this.password) {
    this.errorMessage = 'All fields are required.';
    return;
  }

  this.loginSuccess.emit(this.userName);
  this.close.emit();
}

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'artist_soul';
  openChatBot(): void {
  alert('ChatBot coming soon!'); // Replace with real chatbot modal or integration
}

}

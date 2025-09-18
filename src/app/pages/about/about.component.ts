import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
teamMembers = signal([
    {
      img: 'https://placehold.co/400x400/b0e0e6/3e2f2f?text=Luna+Fae',
      name: 'Luna Fae',
      role: 'Founder & Liipan Art Specialist',
      bio: 'Luna is the heart of ArtisanSoul. With a background in traditional crafts, she specializes in Liipan art, a form of storytelling through intricate woven designs.'
    },
    {
      img: 'https://placehold.co/400x400/98fb98/3e2f2f?text=Jasper+Reed',
      name: 'Jasper Reed',
      role: 'Sketching & Illustration',
      bio: 'Jasper brings a modern touch with his bold illustrations and detailed sketches. His work is inspired by nature and geometric patterns, creating a unique fusion of styles.'
    },
    {
      img: 'https://placehold.co/400x400/ffb6c1/3e2f2f?text=Celeste+Sol',
      name: 'Celeste Sol',
      role: 'Canvas & Mixed Media Artist',
      bio: 'Celeste\'s paintings are a dance of color and texture. She uses mixed media to create vibrant, expressive pieces that capture emotion and natural beauty.'
    }
  ]);
}

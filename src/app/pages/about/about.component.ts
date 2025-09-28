import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
teamMembers = signal([
    {
      img: '../../../assets/art/Artist/artist1.jpg',
      name: 'Manish',
      role: 'Sketching Expert | Canvas Art',
      bio: 'Luna is the heart of ArtisanSoul. With a background in traditional crafts, she specializes in Liipan art, a form of storytelling through intricate woven designs.'
    },
    {
      img: '../../../assets/art/Artist/artist2.jpg',
      name: 'Chaitali',
      role: 'Mandala Art & Liipan Art Specialist',
      bio: 'Jasper brings a modern touch with his bold illustrations and detailed sketches. His work is inspired by nature and geometric patterns, creating a unique fusion of styles.'
    },
    {
      img: '../../../assets/art/Artist/artist3.jpg',
      name: 'Nikhil',
      role: 'Canvas Mixed Media',
      bio: 'Celeste\'s paintings are a dance of color and texture. She uses mixed media to create vibrant, expressive pieces that capture emotion and natural beauty.'
    }
  ]);
}

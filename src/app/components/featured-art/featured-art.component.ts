import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-art',
  templateUrl: './featured-art.component.html',
  styleUrls: ['./featured-art.component.scss']
})
export class FeaturedArtComponent {
artStyles = [
    { title: 'Sketching', image: 'assets/art/featuredart/sketching1.jpg' },
    { title: 'Lippan Art', image: 'assets/art/featuredart/lippanArt1.jpg' },
    { title: 'Canva', image: 'assets/art/featuredart/canvasArt2.jpg' },
    { title: 'Textured Art', image: 'assets/art/featuredart/texturedart1.jpg' },
    { title: 'NamePlate', image: 'assets/art/featuredart/lippanArt3.jpg' },
    { title: 'Mandala Art', image: 'assets/art/featuredart/MandalaArt.jpg' },
    { title: 'Wall Art', image: 'assets/art/featuredart/wallArt.jpg' },
    { title: 'Thread Art', image: 'assets/art/featuredart/ThreadArt.jpg' }
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-art',
  templateUrl: './featured-art.component.html',
  styleUrls: ['./featured-art.component.scss']
})
export class FeaturedArtComponent {
artStyles = [
    { title: 'Sketching', image: 'assets/art/sketching.jpg' },
    { title: 'Lippan Art', image: 'assets/art/lippan.jpg' },
    { title: 'Canva', image: 'assets/art/canva.jpg' },
    { title: 'Color Art', image: 'assets/art/color.jpg' }
  ];
}

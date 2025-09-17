import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-art-carousel',
  templateUrl: './featured-art-carousel.component.html',
  styleUrls: ['./featured-art-carousel.component.scss']
})
export class FeaturedArtCarouselComponent {
  activeSlide = 0;

  featuredArt = [
    {
      title: 'Handcrafted Art for',
      description: 'Discover the beauty of handmade creations that speak to your soul.',
      image: 'assets/art/sketching.jpg'
    },
    {
      title: 'Lippan Art',
      description: 'Traditional mirror work from Gujarat with earthy textures.',
      image: 'assets/art/lippan.jpg'
    },
    {
      title: 'Color Art',
      description: 'Vibrant color compositions that energize any space.',
      image: 'assets/art/color.jpg'
    }
  ];

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.featuredArt.length;
  }

  prevSlide() {
    this.activeSlide = (this.activeSlide - 1 + this.featuredArt.length) % this.featuredArt.length;
  }
}
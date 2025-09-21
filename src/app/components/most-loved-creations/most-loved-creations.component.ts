import { Component } from '@angular/core';

@Component({
  selector: 'app-most-loved-creations',
  templateUrl: './most-loved-creations.component.html',
  styleUrls: ['./most-loved-creations.component.scss']
})
export class MostLovedCreationsComponent {
mostLovedCreations = [
    {
      title: 'Lippan Art',
      description: 'Discover the beauty of handmade creations that speak to your soul.',
      image: 'assets/art/MostLovedArt/lippanArt1.jpg',
      price: 85.0
    },
    {
      title: 'Mandala Liipan',
      image: 'assets/art/MostLovedArt/BohoMandalaLiipan.jpg',
      price: 85.0
    },
    {
      title: 'Canvas Art',
      image: 'assets/art/MostLovedArt/WildflowerCanvas.jpg',
      price: 120.0
    },
    {
      title: 'Terracotta Bloom',
      image: 'assets/art/MostLovedArt/TerracottaBloom.jpg',
      price: 95.0
    },
    {
      title: 'Sunset Sketch',
      image: 'assets/art/MostLovedArt/SunsetSketch.jpg',
      price: 70.0
    },
    {
      title: 'Mirror Mosaic Mandala',
      image: 'assets/art/MostLovedArt/MirrorMosaicMandala.jpg',
      price: 110.0
    }
  ];
}

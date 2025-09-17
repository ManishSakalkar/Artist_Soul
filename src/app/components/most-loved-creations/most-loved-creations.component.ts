import { Component } from '@angular/core';

@Component({
  selector: 'app-most-loved-creations',
  templateUrl: './most-loved-creations.component.html',
  styleUrls: ['./most-loved-creations.component.scss']
})
export class MostLovedCreationsComponent {
mostLovedCreations = [
    {
      title: "Desert Sunset Sketch",
      price: 45.00,
      image: "assets/art-desert-sunset.jpg"
    },
    {
      title: "Boho Mandala Liipan",
      price: 85.00,
      image: "assets/art-boho-mandala.jpg"
    },
    {
      title: "Wildflower Canvas",
      price: 120.00,
      image: "assets/art-wildflower.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

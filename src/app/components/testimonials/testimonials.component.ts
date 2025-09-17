import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
 testimonials = [
    {
      quote: "I absolutely love my new canvas art! It perfectly complements my living room and adds so much warmth. The quality is exceptional.",
      name: "Sarah J.",
      location: "New York, NY"
    },
    {
      quote: "The Liipan art I ordered is stunning. The craftsmanship is incredible and the colors are even more vibrant in person. Highly recommend!",
      name: "Mark T.",
      location: "Los Angeles, CA"
    },
    {
      quote: "This artist has an amazing talent! The custom sketching piece she created for me was a wonderful gift. Thank you!",
      name: "Jessica P.",
      location: "Austin, TX"
    },
    {
      quote: "This artist has an amazing talent! The custom sketching piece she created for me was a wonderful gift. Thank you!",
      name: "Jessica P.",
      location: "Austin, TX"
    },
    {
      quote: "This artist has an amazing talent! The custom sketching piece she created for me was a wonderful gift. Thank you!",
      name: "Jessica P.",
      location: "Austin, TX"
    },
    {
      quote: "This artist has an amazing talent! The custom sketching piece she created for me was a wonderful gift. Thank you!",
      name: "Jessica P.",
      location: "Austin, TX"
    },
    {
      quote: "This artist has an amazing talent! The custom sketching piece she created for me was a wonderful gift. Thank you!",
      name: "Jessica P.",
      location: "Austin, TX"
    },
    {
      quote: "This artist has an amazing talent! The custom sketching piece she created for me was a wonderful gift. Thank you!",
      name: "Jessica P.",
      location: "Austin, TX"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

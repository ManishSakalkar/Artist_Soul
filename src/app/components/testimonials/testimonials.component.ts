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
      name: "Aarushi Mehta",
      location: "Jaipur, Rajasthan"
    },
    {
      quote: "The Liipan art I ordered is stunning. The craftsmanship is incredible and the colors are even more vibrant in person. Highly recommend!",
      name: "Rohan Deshmukh",
      location: "Pune, Maharashtra"
    },
    {
      quote: "This artist has an amazing talent! The custom sketching piece she created for me was a wonderful gift. Thank you!",
      name: "Neha Kapoor",
      location: "Delhi"
    },
    {
      quote: "I’ve never seen such intricate detailing in Liipan art. It brings warmth and tradition to my modern space beautifully.",
      name: "Kunal Joshi",
      location: "Ahmedabad, Gujarat"
    },
    {
      quote: "Absolutely loved the Wildflower Canvas! It’s vibrant, calming, and feels like a window into nature.",
      name: "Meera Iyer",
      location: "Bengaluru, Karnataka"
    },
    {
      quote: "The sketching work is phenomenal. It captured my pet’s personality so well—I’ll treasure it forever.",
      name: "Ananya Rao",
      location: "Hyderabad, Telangana"
    },
    {
      quote: "I ordered a custom mandala and it exceeded my expectations. The symmetry and energy are just perfect.",
      name: "Dev Sharma",
      location: "Chandigarh"
    },
     {
      quote: "The earthy tones and textures in the Liipan piece I received are so grounding. It’s more than art—it’s emotion.",
      name: "Simran Kaur",
      location: "Amritsar, Punjab"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

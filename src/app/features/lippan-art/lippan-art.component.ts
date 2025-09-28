import { Component } from '@angular/core';

@Component({
  selector: 'app-lippan-art',
  templateUrl: './lippan-art.component.html',
  styleUrls: ['./lippan-art.component.scss']
})
export class LippanArtComponent {
 artCollection = [
  {
      name: 'Mandala Art',
      price: 1000,
      image: 'assets/art/Lippan/art6.jpg'
    },
    {
      name: 'Mandala Art',
      price: 1000,
      image: 'assets/art/Lippan/art7.jpg'
    },
    {
      name: 'Peacock Lippan Art',
      price: 2000,
      image: 'assets/art/Lippan/art8.jpg'
    },  
    {
      name: 'Sunburst Mandala',
      price: 2000,
      image: 'assets/art/Lippan/art1.jpg'
    },
    {
      name: 'Desert Bloom',
      price: 2000,
      image: 'assets/art/Lippan/art2.jpg'
    },
    {
      name: 'Mirror Lotus',
      price: 1000,
      image: 'assets/art/Lippan/art3.jpg'
    },
    {
      name: 'Lippan Art Elephant',
      price: 2000,
      image: 'assets/art/Lippan/art4.jpg'
    },
    {
      name: 'Lippan Art Wall Art',
      price: 2500,
      image: 'assets/art/Lippan/art5.jpg'
    },
    {
      name: 'Wall Art',
      price: 2500,
      image: 'assets/art/Lippan/art9.jpg'
    },
    {
      name: 'Wall Art',
      price: 2500,
      image: 'assets/art/Lippan/art10.jpg'
    },
    {
      name: 'Wall Art',
      price: 2500,
      image: 'assets/art/Lippan/art11.jpg'
    },
    {
      name: 'Wall Art',
      price: 2500,
      image: 'assets/art/Lippan/art12.jpg'
    },
    {
      name: 'Wall Art',
      price: 2500,
      image: 'assets/art/Lippan/art13.jpg'
    },
    {
      name: 'Wall Art',
      price: 2500,
      image: 'assets/art/Lippan/art14.jpg'
    },
    {
      name: 'Wall Art',
      price: 2500,
      image: 'assets/art/Lippan/Artf.jpg'
    },
    {
      name: 'Wall Art',
      price: 2500,
      image: 'assets/art/Lippan/art16.jpg'
    },
    {
      name: 'Wall Art',
      price: 2500,
      image: 'assets/art/Lippan/art17.jpg'
    },
    {
      name: 'Wall Art',
      price: 2500,
      image: 'assets/art/Lippan/art18.jpg'
    },
    {
      name: 'Wall Art',
      price: 2500,
      image: 'assets/art/Lippan/art19.jpg'
    },
    {
      name: 'Wall Art',
      price: 2500,
      image: 'assets/art/Lippan/art20.jpg'
    },
    {
      name: 'Wall Art',
      price: 15000,
      image: 'assets/art/Lippan/art21.png'
    },
    {
      name: 'Wall Art',
      price: 5000,
      image: 'assets/art/Lippan/art22.jpg'
    },
    {
      name: 'Wall Art',
      price: 2500,
      image: 'assets/art/Lippan/art23.jpg'
    },
    {
      name: 'Wall Art',
      price: 2500,
      image: 'assets/art/Lippan/art24.jpg'
    },
    
    // Add more items here
  ];

  generateWhatsAppLink(item: any): string {
  const imageUrl = `${window.location.origin}/assets/art/Lippan/${item.image}`;
  const message = `Hello! I came across your product "${item.title}" priced at ₹${item.price} and I really liked it.\nImage preview: ${imageUrl}\nI’d love to place an order for this item. Could you please guide me through the ordering process and share the next steps?`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/918308181847?text=${encodedMessage}`;
}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-most-loved-creations',
  templateUrl: './most-loved-creations.component.html',
  styleUrls: ['./most-loved-creations.component.scss']
})
export class MostLovedCreationsComponent {
// generateWhatsAppLink(item: any): string {
//   const message = `Hi, I'm interested in "${item.title}" priced at ₹${item.price}.\nImage preview: ${window.location.origin}/${item.image}\nPlease share details.`;
//   const encodedMessage = encodeURIComponent(message);
//   return `https://wa.me/918308181847?text=${encodedMessage}`;
// }

generateWhatsAppLink(item: any): string {
  const imageUrl = `${window.location.origin}/assets/art/MostLovedArt/${item.image}`;
  const message = `Hello! I came across your product "${item.title}" priced at ₹${item.price} and I really liked it.\nImage preview: ${imageUrl}\nI’d love to place an order for this item. Could you please guide me through the ordering process and share the next steps?`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/918308181847?text=${encodedMessage}`;
}



mostLovedCreations = [
    {
      title: 'Lippan Art Elephant',
      description: 'Discover the beauty of handmade creations that speak to your soul.',
      image: 'assets/art/MostLovedArt/lippanArt1.jpg',
      price: 1000
    },
    {
      title: 'Mandala Liipan',
      image: 'assets/art/MostLovedArt/BohoMandalaLiipan.jpg',
      price: 1000
    },
    {
      title: 'Canvas Art',
      image: 'assets/art/MostLovedArt/WildflowerCanvas.jpg',
      price: 2500
    },
    {
      title: 'Terracotta Bloom',
      image: 'assets/art/MostLovedArt/TerracottaBloom.jpg',
      price: 3000
    },
    {
      title: 'Sunset Sketch',
      image: 'assets/art/MostLovedArt/SunsetSketch.jpg',
      price: 1000
    },
    {
      title: 'Mirror Mosaic Mandala',
      image: 'assets/art/MostLovedArt/MirrorMosaicMandala.jpg',
      price: 2500
    }
  ];
}

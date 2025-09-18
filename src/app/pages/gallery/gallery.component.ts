import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
galleryItems = signal([
    {
      img: 'https://placehold.co/800x600/b0c4de/3e2f2f?text=Piece+One',
      title: 'Desert Sun',
      price: '$120.00',
      tags: ['featured', 'most-loved']
    },
    {
      img: 'https://placehold.co/600x800/f0e68c/3e2f2f?text=Piece+Two',
      title: 'Terracotta Dreams',
      price: '$180.00',
      tags: ['featured']
    },
    {
      img: 'https://placehold.co/600x600/d2b48c/3e2f2f?text=Piece+Three',
      title: 'Woven Spirit',
      price: '$95.00',
      tags: ['favourite']
    },
    {
      img: 'https://placehold.co/800x1200/6d8b6f/3e2f2f?text=Piece+Four',
      title: 'Forest Whisper',
      price: '$250.00',
      tags: ['most-loved']
    },
    {
      img: 'https://placehold.co/600x400/8fbc8f/3e2f2f?text=Piece+Five',
      title: 'Green Oasis',
      price: '$75.00',
      tags: []
    },
    {
      img: 'https://placehold.co/800x800/d4a373/3e2f2f?text=Piece+Six',
      title: 'Boho Bloom',
      price: '$150.00',
      tags: ['featured', 'favourite']
    },
    {
      img: 'https://placehold.co/400x500/a5694f/fdf6f0?text=Bohemian+Abstract',
      title: 'Echoes of the Canyon',
      price: '$190.00',
      tags: []
    },
    {
      img: 'https://placehold.co/500x700/f8c471/3e2f2f?text=Earthy+Vibes',
      title: 'Sun-kissed Clay',
      price: '$210.00',
      tags: ['most-loved']
    },
    {
      img: 'https://placehold.co/700x500/8c8d5f/fdf6f0?text=Natural+Patterns',
      title: 'Verdant Meadow',
      price: '$135.00',
      tags: ['favourite']
    }
  ]);
}

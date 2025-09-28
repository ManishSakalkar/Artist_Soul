import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
galleryItems = [
    {
      img: 'assets/art/Gallery/gallery2.jpg',
      title: 'Boottle Art',
      price: '1200 Rs',
      tags: ['featured', 'most-loved']
    },
    {
      img: 'assets/art/Gallery/gallery1.jpg',
      title: 'Traditional Lippan Art',
      price: '2999 Rs',
      tags: ['featured']
    },
    {
      img: 'assets/art/Gallery/gallery3.jpg',
      title: 'Evil Eye',
      price: '1999 Rs',
      tags: ['favourite']
    },
    {
      img: 'assets/art/Gallery/gallery4.jpg',
      title: 'Madala Lippan Art',
      price: '1999 Rs',
      tags: ['most-loved']
    },
    {
      img: 'assets/art/Gallery/gallery5.jpg',
      title: 'Zaroka Frames',
      price: '999 Rs',
      tags: []
    },
    {
      img: 'assets/art/Gallery/gallery6.jpg',
      title: 'Peackock Lippan Art',
      price: '2499 Rs',
      tags: ['featured', 'favourite']
    },
    {
      img: 'assets/art/Gallery/gallery7.jpg',
      title: 'Home Decore Art',
      price: '2999 Rs',
      tags: []
    },
    {
      img: 'assets/art/Gallery/gallery8.jpg',
      title: 'Name Plates',
      price: '1999 Rs',
      tags: ['most-loved']
    },
    {
      img: 'assets/art/Gallery/gallery9.jpg',
      title: 'Traditional Art Frame',
      price: '3599 Rs',
      tags: ['favourite']
    }
  ];
}

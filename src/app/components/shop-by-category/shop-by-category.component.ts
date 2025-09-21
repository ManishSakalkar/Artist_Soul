import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.scss']
})
export class ShopByCategoryComponent {
sectionTitle = 'Shop by Category';
sectionSlogan = 'Discover timeless artistry passed down through generations.';

  categories = signal([
    {
      title: 'Canvas',
      description: 'Discover the beauty of handmade creations that speak to your soul.',
      image: 'assets/art/shopbycategory/CanvasArt.jpg',
      name: 'Canvas',
      slogan: "Where a blank canvas becomes a story.",
      route: 'Canvas'
    },
    {
     title: 'Lippan Art',
      description: 'Discover the beauty of handmade creations that speak to your soul.',
      image: 'assets/art/shopbycategory/lippanArt.jpg',
       name: 'Lippan Art',
        slogan: "Mud, mirrors, and magic.",
       route: 'lippan art'
    },
    {
      name: 'Sketching',
       slogan: "Every line tells a tale.",
      image: 'assets/art/shopbycategory/sketching.jpg',
      route: 'sketching'
    }
  ]);

    
}

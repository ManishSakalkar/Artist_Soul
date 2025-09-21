import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeaturedArtCarouselComponent } from './components/featured-art-carousel/featured-art-carousel.component';
import { FeaturedArtComponent } from './components/featured-art/featured-art.component';
import { ShopByCategoryComponent } from './components/shop-by-category/shop-by-category.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { MostLovedCreationsComponent } from './components/most-loved-creations/most-loved-creations.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
AppComponent,
    HomeComponent,
    NavbarComponent,
    FeaturedArtCarouselComponent,
    FeaturedArtComponent,
    ShopByCategoryComponent,
    TestimonialsComponent,
    MostLovedCreationsComponent,
    GetInTouchComponent,
    FooterComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,
  ProfileComponent // ✅ this enables ngModel binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

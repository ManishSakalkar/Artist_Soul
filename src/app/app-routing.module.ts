import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' } // fallback
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

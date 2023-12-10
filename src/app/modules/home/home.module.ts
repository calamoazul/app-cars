import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../pages/home/home.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';




@NgModule({
  declarations: [HomeComponent, HeroComponent, GalleryComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

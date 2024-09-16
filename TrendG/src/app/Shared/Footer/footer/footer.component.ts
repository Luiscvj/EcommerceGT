import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgOptimizedImage,],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
 
})
export class FooterComponent {

}

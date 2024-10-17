import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother} from "gsap/ScrollSmoother";
import { CategoriesComponent } from '../../Catalog/Categories/categories/categories.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(public render: Renderer2) {

    
  }

  
  ngOnInit(): void {
    this.render.addClass(document.body,'custom-body-style-home')
     
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.boxgsap',{
        scrollTrigger: '.boxgsap',
        duration:2,
        opacity: 1,
      }); 

      let tl = gsap.timeline({
        scrollTrigger:{
          trigger:'.welcomingText',
          start:"top 80%",
          scrub:1,
         
        }
      });
      tl.to('.welcomingText',{opacity:1, x:"4vw"}),
      tl.to('.welcomingText',{opacity:0, x:"10vw"});




   
   
 
   }

  ngOnDestroy(): void {
    
   this.render.removeClass(document.body,'custom-body-style-home')
  }


}

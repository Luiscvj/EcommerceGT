import { afterNextRender, afterRender, AfterViewInit, ChangeDetectorRef, Component, contentChild, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, signal, viewChildren, ViewChildren } from '@angular/core';
import { Category } from '../../../../../Core/Models/Category/category';
import { CategoryService } from '../../../../../Core/Services/CategoryService/category.service';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit,AfterViewInit, OnDestroy{

  categories: Category[] = [];
  description: {[key: string]:string} =
  {
    electronics:"Step into the future with our cutting-edge electronics. From sleek smartphones to powerful laptops and gaming consoles, each device"
                + "is designed to enhance your digital experience. Discover the latest technology that blends style and performance seamlessly.",
    "men's clothing":"Elevate your wardrobe with our curated selection of men's fashion. Whether it's sharp suits for the office,"
                +"casual shorts for the weekend, or sporty hoodies for your workouts, each piece is crafted with style and comfort in mind.",
    "women's clothing":"Unleash your inner fashionista with our elegant and diverse collection of women's clothing. From chic"
                + "dresses to trendy blouses and versatile athletic wear, find the perfect outfit for every occasion, combining luxury with comfort.",
    jewelery: "Indulge in timeless elegance with our exquisite range of jewelry. From sparkling diamonds to sleek modern designs," 
                +"each piece is crafted to perfection, adding a touch of luxury to every outfit. Shine brighter every day with the perfect accessory."
      
  }
  categorySection: Element[] = [];
  


  constructor(private categoryService: CategoryService,  public cdr: ChangeDetectorRef, public elementRef:ElementRef, public  render: Renderer2){
      
     afterRender({
        read: ()=>
          {   
            if(this.categorySection.length  <  1){
              this.categorySection = elementRef.nativeElement.querySelectorAll('.categorySection');
              this.showCategories();
            }
          
          }              
      })

      
  }
  
 
  
  ngOnInit(): void 
  {
    this.getCategories(); 
    gsap.registerPlugin(ScrollTrigger); 
    this.render.addClass(document.body, 'custom-body-for-categories');
    
  }
  ngAfterViewInit(): void {
   this.showCategories();
  
  }

  ngOnDestroy(): void {
    this.render.removeClass(document.body, 'custom-body-for-categories');
  }

   getCategories= (): void=> 
  {
    this.categoryService.getAllCategories().subscribe({
      next:(response)=>
      {
          try
          {
            if(response.status === 200 && response.body && response.body.length > 0){
      
               const categoriesMapped = response.body.map((category:string, index:number)=>({
                category_id: index,
                category_name: category,
                category_alias: category.substring(0,3)
               }))             
               this.categories =  categoriesMapped; 
               
               this.cdr.detectChanges();
              
              
                            
            }
            else if (response.status === 404)
            {

              console.log("Records not found status: " , response.status);
            }else
            {
              console.log(`Unexpected error ${response.status}`);
            }
          }catch(error)
          {
            console.error()
          }
      }
    }) 
  }


   
  


  showCategories = ():void =>
    {
  
      console.log(this.categories);
      if(this.categorySection.length > 0)
        {

          console.log(this.categorySection);
          let sections = gsap.utils.toArray(this.categorySection);
          let tl = gsap.timeline({
            scrollTrigger:{
              trigger:'.containerCategories',
              start:'top center',
              scrub:true,
              markers: true,
             
             
                  
            }})


        //?Electronics
          tl.from('.categorySection.ele' ,
            {
              opacity:0, 
              x:'-10vw',
              duration:4      
            })
        //?Jewelery
          tl.from('.categorySection.jew',
          {
            opacity:0,
            x:'10vw',
            duration:4
          })
        //?Men
          tl.from('.categorySection.men' ,
            {
              opacity:0,
              x:'-10vw',
              duration:4       
            })

          //?Women
          tl.from('.categorySection.wom',
          {
            opacity:0,
            x:'10vw',
            duration:4
          })   
          tl.to('.categorySection',
            {
              opacity:1,
              x:'0vw',
              duration:6,
              ease:'power1.inOut'
            })




        }
    }
}


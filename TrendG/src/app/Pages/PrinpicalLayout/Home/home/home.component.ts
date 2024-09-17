import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  /**
   *
   */
  constructor(public render: Renderer2) {
    
    
  }
  ngOnDestroy(): void {
   this.render.removeClass(document.body,'custom-body-style-home')
  }
  ngOnInit(): void {
    this.render.addClass(document.body,'custom-body-style-home')
  }
}

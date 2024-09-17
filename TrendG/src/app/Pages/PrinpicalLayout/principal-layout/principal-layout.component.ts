import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../Shared/Header/header/header.component';
import { FooterComponent } from '../../../Shared/Footer/footer/footer.component';

@Component({
  selector: 'app-principal-layout',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './principal-layout.component.html',
  styleUrl: './principal-layout.component.css'
})
export class PrincipalLayoutComponent {

}

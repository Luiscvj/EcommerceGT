import { Routes } from '@angular/router';
import { User } from './Core/Models/User/user';
import { LoginComponent } from './Pages/Login/login/login.component';
import { HeaderComponent } from './Shared/Header/header/header.component';
import { HomeComponent } from './Pages/Home/home/home.component';

export const routes: Routes = [
   
    {
        path: '',
        loadChildren: () => import('./Pages/Home/home.routes').then(r => r.HOME_ROUTES)
    },
    {
        path:'cart',
        loadChildren: () => import('./Pages/Carts/cart.routes').then(r => r.CART_ROUTES)
    }
];

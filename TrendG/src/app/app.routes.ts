import { Routes } from '@angular/router';
import { User } from './Core/Models/User/user';
import { LoginComponent } from './Pages/Login/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component:LoginComponent,
        title: 'Login user'

        
    }
];

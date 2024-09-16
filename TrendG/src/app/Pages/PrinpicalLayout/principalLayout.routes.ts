import { Routes } from "@angular/router";
import { PrincipalLayoutComponent } from "./principal-layout/principal-layout.component";
import { LoginComponent } from "../Login/login/login.component";
import { HomeComponent } from "./Home/home/home.component";
import { AboutComponent } from "./About/about/about.component";

export const PRINCIPAL_LAYOUT_ROUTES: Routes=[
    {
        path: '',
        component: PrincipalLayoutComponent  
    },
    {
        path: 'catalog',
        component:LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path:'about_us',
        component: AboutComponent
    }
]
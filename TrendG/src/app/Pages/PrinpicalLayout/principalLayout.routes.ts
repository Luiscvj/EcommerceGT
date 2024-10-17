import { Routes } from "@angular/router";
import { PrincipalLayoutComponent } from "./principal-layout/principal-layout.component";
import { HomeComponent } from "./Home/home/home.component";
import { AboutComponent } from "./About/about/about.component";
import { CatalogComponent } from "./Catalog/catalog/catalog.component";

export const PRINCIPAL_LAYOUT_ROUTES: Routes=
[
    {
        path: '',
        component:PrincipalLayoutComponent,
        children:[
            {
                path: 'home',
                component:HomeComponent
            },
            {
                path: 'catalog',
                component:CatalogComponent
            },
            {
                path:'about_us',
                component: AboutComponent
            }     
        ]
    },

    

  
   
]
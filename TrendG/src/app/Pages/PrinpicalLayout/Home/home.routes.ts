import { Routes } from "@angular/router";
import { ProductsComponent } from "../products/products.component";
import { CategoriesComponent } from "../Categories/categories/categories.component";
import { DashboardComponent } from "../Carts/dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";

export const HOME_ROUTES: Routes =[
    {
        path: '',
        component:HomeComponent
    },
    {

        path: 'product', component: ProductsComponent
    },
    {
        path: 'categories', component:CategoriesComponent
    },
 
]
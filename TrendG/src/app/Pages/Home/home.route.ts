import { Routes } from "@angular/router";
import { ProductsComponent } from "../products/products.component";
import { CategoriesComponent } from "../Categories/categories/categories.component";
import { DashboardComponent } from "../Carts/dashboard/dashboard.component";

export const HOME_ROUTES: Routes =[
    {
        path: 'product', component: ProductsComponent
    },
    {
        path: 'categories', component:CategoriesComponent
    },
 
]
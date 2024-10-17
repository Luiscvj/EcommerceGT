import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CategoriesComponent } from "../Catalog/Categories/categories/categories.component";

export const HOME_ROUTES: Routes =[{

   component:HomeComponent,
    children:[
        {
            path:'categories',
            component:CategoriesComponent
        }]
}]
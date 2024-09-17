import { Routes } from '@angular/router';

export const routes: Routes = [
   
    {
        path:'cart',
        loadChildren: () => import('./Pages/PrinpicalLayout/Carts/cart.routes').then(r => r.CART_ROUTES)
    },
    {
        path:'principalLayout',
        loadChildren: () => import('./Pages/PrinpicalLayout/principalLayout.routes').then(r => r.PRINCIPAL_LAYOUT_ROUTES)
    }

];

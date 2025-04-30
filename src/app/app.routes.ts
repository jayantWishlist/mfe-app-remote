import { Routes } from '@angular/router';

import { RemoteComponent } from './remote/remote.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { MpDetailsComponent } from './mp-details/mp-details.component';

export const routes: Routes = [
    { path: "", redirectTo: "remote", pathMatch: 'full' },
    {
        path: "remote", component: RemoteComponent,
        // These routes are for only 
        children: [
            { path: "cart-page", component: CartPageComponent, },
            { path: "checkout-page", component: CheckoutPageComponent, },
            { path: "details", component: MpDetailsComponent, },
        ]
    }
];

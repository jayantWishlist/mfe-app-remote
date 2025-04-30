import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RemoteComponent } from './remote.component';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { CheckoutPageComponent } from '../checkout-page/checkout-page.component';
import { MpDetailsComponent } from '../mp-details/mp-details.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // These route are used for new 
    RouterModule.forChild([
      {
        path: "", component: RemoteComponent, pathMatch: 'full',
      },
      { path: "cart-page", component: CartPageComponent, },
      { path: "checkout-page", component: CheckoutPageComponent, },
      { path: "details", component: MpDetailsComponent, },
    ])
  ]
})
export class RemoteModule { }

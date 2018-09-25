import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { CheckOrderComponent } from './check-order/check-order.component';
import { CustomerReceiveComponent } from './customer-receive/customer-receive.component';
import { ReceiveComponent } from './receive/receive.component';

import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CheckOrderComponent,
    CustomerReceiveComponent,
    ReceiveComponent,
    
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ReceiveComponent },
      { path: 'customer-receive', component: CustomerReceiveComponent },
      { path: 'check-order', component: CheckOrderComponent }
    ]),
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiftRoutingModule } from './gift-routing.module';
import { Gift1Component } from './gift1/gift1.component';
import { Gift2Component } from './gift2/gift2.component';
import { Gift3Component } from './gift3/gift3.component';
import { GiftHomeComponent } from './gift-home/gift-home.component';


@NgModule({
  declarations: [
    Gift1Component,
    Gift2Component,
    Gift3Component,
    GiftHomeComponent
  ],
  imports: [
    CommonModule,
    GiftRoutingModule
  ]
})
export class GiftModule { }

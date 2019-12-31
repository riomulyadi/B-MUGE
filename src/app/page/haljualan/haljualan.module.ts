import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaljualanPageRoutingModule } from './haljualan-routing.module';

import { HaljualanPage } from './haljualan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaljualanPageRoutingModule
  ],
  declarations: [HaljualanPage]
})
export class HaljualanPageModule {}

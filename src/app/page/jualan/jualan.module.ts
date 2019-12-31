import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JualanPageRoutingModule } from './jualan-routing.module';

import { JualanPage } from './jualan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JualanPageRoutingModule
  ],
  declarations: [JualanPage]
})
export class JualanPageModule {}

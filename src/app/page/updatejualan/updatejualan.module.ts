import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatejualanPageRoutingModule } from './updatejualan-routing.module';

import { UpdatejualanPage } from './updatejualan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatejualanPageRoutingModule
  ],
  declarations: [UpdatejualanPage]
})
export class UpdatejualanPageModule {}

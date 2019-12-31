import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TariksaldoPageRoutingModule } from './tariksaldo-routing.module';

import { TariksaldoPage } from './tariksaldo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TariksaldoPageRoutingModule
  ],
  declarations: [TariksaldoPage]
})
export class TariksaldoPageModule {}

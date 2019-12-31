import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AksesorisPageRoutingModule } from './aksesoris-routing.module';

import { AksesorisPage } from './aksesoris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AksesorisPageRoutingModule
  ],
  declarations: [AksesorisPage]
})
export class AksesorisPageModule {}

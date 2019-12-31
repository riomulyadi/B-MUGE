import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BelanjaanPageRoutingModule } from './belanjaan-routing.module';

import { BelanjaanPage } from './belanjaan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BelanjaanPageRoutingModule
  ],
  declarations: [BelanjaanPage]
})
export class BelanjaanPageModule {}

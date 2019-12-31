import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahsaldoPageRoutingModule } from './tambahsaldo-routing.module';

import { TambahsaldoPage } from './tambahsaldo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahsaldoPageRoutingModule
  ],
  declarations: [TambahsaldoPage]
})
export class TambahsaldoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakananPageRoutingModule } from './makanan-routing.module';

import { MakananPage } from './makanan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakananPageRoutingModule
  ],
  declarations: [MakananPage]
})
export class MakananPageModule {}

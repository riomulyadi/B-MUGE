import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PakaianPageRoutingModule } from './pakaian-routing.module';

import { PakaianPage } from './pakaian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PakaianPageRoutingModule
  ],
  declarations: [PakaianPage]
})
export class PakaianPageModule {}

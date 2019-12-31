import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahjualanPageRoutingModule } from './tambahjualan-routing.module';

import { TambahjualanPage } from './tambahjualan.page';

import { AutosizeModule } from 'ngx-autosize';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahjualanPageRoutingModule,
    AutosizeModule
  ],
  declarations: [TambahjualanPage]
})
export class TambahjualanPageModule {}

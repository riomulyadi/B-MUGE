import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TokosayaPageRoutingModule } from './tokosaya-routing.module';

import { TokosayaPage } from './tokosaya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TokosayaPageRoutingModule
  ],
  declarations: [TokosayaPage]
})
export class TokosayaPageModule {}

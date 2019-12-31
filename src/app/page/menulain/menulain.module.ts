import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenulainPageRoutingModule } from './menulain-routing.module';

import { MenulainPage } from './menulain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenulainPageRoutingModule
  ],
  declarations: [MenulainPage]
})
export class MenulainPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BukajualanPageRoutingModule } from './bukajualan-routing.module';

import { BukajualanPage } from './bukajualan.page';

const routes: Routes = [
  {
    path: '',
    component: BukajualanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BukajualanPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BukajualanPage]
})
export class BukajualanPageModule {}

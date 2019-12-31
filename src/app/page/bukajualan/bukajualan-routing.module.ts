import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BukajualanPage } from './bukajualan.page';

const routes: Routes = [
  {
    path: '',
    component: BukajualanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BukajualanPageRoutingModule {}

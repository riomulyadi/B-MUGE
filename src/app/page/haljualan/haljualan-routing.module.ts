import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaljualanPage } from './haljualan.page';

const routes: Routes = [
  {
    path: '',
    component: HaljualanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaljualanPageRoutingModule {}

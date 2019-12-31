import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BayarPage } from './bayar.page';

const routes: Routes = [
  {
    path: '',
    component: BayarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BayarPageRoutingModule {}

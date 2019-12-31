import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahsaldoPage } from './tambahsaldo.page';

const routes: Routes = [
  {
    path: '',
    component: TambahsaldoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahsaldoPageRoutingModule {}

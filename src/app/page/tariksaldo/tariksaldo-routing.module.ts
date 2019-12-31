import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TariksaldoPage } from './tariksaldo.page';

const routes: Routes = [
  {
    path: '',
    component: TariksaldoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TariksaldoPageRoutingModule {}

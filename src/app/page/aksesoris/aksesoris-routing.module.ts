import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AksesorisPage } from './aksesoris.page';

const routes: Routes = [
  {
    path: '',
    component: AksesorisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AksesorisPageRoutingModule {}

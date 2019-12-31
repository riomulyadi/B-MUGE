import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatejualanPage } from './updatejualan.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatejualanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatejualanPageRoutingModule {}

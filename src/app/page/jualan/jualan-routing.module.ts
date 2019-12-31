import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JualanPage } from './jualan.page';

const routes: Routes = [
  {
    path: '',
    component: JualanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JualanPageRoutingModule {}

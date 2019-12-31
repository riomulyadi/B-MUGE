import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BelanjaanPage } from './belanjaan.page';

const routes: Routes = [
  {
    path: '',
    component: BelanjaanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BelanjaanPageRoutingModule {}

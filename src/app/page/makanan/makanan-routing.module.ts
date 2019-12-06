import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakananPage } from './makanan.page';

const routes: Routes = [
  {
    path: '',
    component: MakananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakananPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PakaianPage } from './pakaian.page';

const routes: Routes = [
  {
    path: '',
    component: PakaianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PakaianPageRoutingModule {}

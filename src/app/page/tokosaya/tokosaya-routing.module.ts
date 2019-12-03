import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokosayaPage } from './tokosaya.page';

const routes: Routes = [
  {
    path: '',
    component: TokosayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokosayaPageRoutingModule {}

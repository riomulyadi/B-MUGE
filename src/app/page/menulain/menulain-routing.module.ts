import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenulainPage } from './menulain.page';

const routes: Routes = [
  {
    path: '',
    component: MenulainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenulainPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahjualanPage } from './tambahjualan.page';

const routes: Routes = [
  {
    path: '',
    component: TambahjualanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahjualanPageRoutingModule {}

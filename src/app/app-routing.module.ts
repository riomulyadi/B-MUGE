import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { 
    path: '', redirectTo: 'login', pathMatch: 'full' 
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'daftar',
    loadChildren: () => import('./page/daftar/daftar.module').then( m => m.DaftarPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'tokosaya',
    loadChildren: () => import('./page/tokosaya/tokosaya.module').then( m => m.TokosayaPageModule)
  },
  {
    path: 'keranjang',
    loadChildren: () => import('./page/keranjang/keranjang.module').then( m => m.KeranjangPageModule)
   },
   {
    path: 'orderan',
    loadChildren: () => import('./page/orderan/orderan.module').then( m => m.OrderanPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

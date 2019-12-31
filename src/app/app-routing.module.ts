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
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
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
    path: 'makanan',
    loadChildren: () => import('./page/makanan/makanan.module').then( m => m.MakananPageModule)
  },
  {
    path: 'pakaian',
    loadChildren: () => import('./page/pakaian/pakaian.module').then( m => m.PakaianPageModule)
  },
  {
    path: 'aksesoris',
    loadChildren: () => import('./page/aksesoris/aksesoris.module').then( m => m.AksesorisPageModule)
  },
  {
    path: 'menulain',
    loadChildren: () => import('./page/menulain/menulain.module').then( m => m.MenulainPageModule)
  },
  {
    path: 'topup',
    loadChildren: () => import('./page/topup/topup.module').then( m => m.TopupPageModule)
  },
  {
    path: 'tambahjualan',
    loadChildren: () => import('./page/tambahjualan/tambahjualan.module').then( m => m.TambahjualanPageModule)
  },
  {
    path: 'jualan',
    loadChildren: () => import('./page/jualan/jualan.module').then( m => m.JualanPageModule)
  },
  {
    path: 'haljualan',
    loadChildren: () => import('./page/haljualan/haljualan.module').then( m => m.HaljualanPageModule)
  },
  {
    path: 'updatejualan',
    loadChildren: () => import('./page/updatejualan/updatejualan.module').then( m => m.UpdatejualanPageModule)
  },
  {
    path: 'tambahsaldo',
    loadChildren: () => import('./page/tambahsaldo/tambahsaldo.module').then( m => m.TambahsaldoPageModule)
  },
  {
    path: 'tariksaldo',
    loadChildren: () => import('./page/tariksaldo/tariksaldo.module').then( m => m.TariksaldoPageModule)
  },
  {
    path: 'bukajualan/:id/:nama/:desc/:harga',
    loadChildren: () => import('./page/bukajualan/bukajualan.module').then( m => m.BukajualanPageModule)
  },
  {
    path: 'bayar',
    loadChildren: () => import('./page/bayar/bayar.module').then( m => m.BayarPageModule)
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

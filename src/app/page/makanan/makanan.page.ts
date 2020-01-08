import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../../providers/post-provider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-makanan',
  templateUrl: './makanan.page.html',
  styleUrls: ['./makanan.page.scss'],
})
export class MakananPage implements OnInit {

  deals: any = [];
  jualans: any = [];
  limit: number = 100000;
  start: number = 0;
  username: string;
  anggota: any;
  full_name: string;

  constructor(public navCtrl: NavController,
    private router: Router,
    private postPvdr: PostProvider,
    public toastController: ToastController,
    private storage: Storage
    ) { }

  ngOnInit() {
  }

  kembali() {
    this.navCtrl.navigateRoot('/tabs');
  }

  bukajualan(id, nama, desc, harga) {
    this.router.navigate(['/bukajualan/' + id + '/' + nama + '/' + desc + '/' + harga]);
  }

  ionViewWillEnter() {
    this.jualans = [];
    this.start = 0;
    this.loadDeals();
    this.loadJualan();
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.username = this.anggota.username;
      this.full_name = this.anggota.full_name;
    });
  }

  keranjang() {
    this.router.navigate(['/belanjaan']);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }

  loadData(event: any) {
    this.start += this.limit;
    setTimeout(() => {
      this.loadJualan().then(() => {
        event.target.complete();
      });
    }, 500);
    setTimeout(() => {
      this.loadDeals().then(() => {
        event.target.complete();
      });
    }, 500);
  }

  loadJualan() {
    return new Promise(resolve => {
      let body = {
        aksi: 'ambilmakanan',
        limit : this.limit,
        start : this.start,
      };

      this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        for (let jualan of data.result) {
          this.jualans.push(jualan);
        }
        resolve(true);
      });
    });
  }

  loadDeals() {
    return new Promise(resolve => {
      let body = {
        aksi: 'ambildata5000',
        limit : this.limit,
        start : this.start,
      };

      this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        for (let deal of data.result) {
          this.deals.push(deal);
        }
        resolve(true);
      });
    });
  }
}

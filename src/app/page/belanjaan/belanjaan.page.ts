import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController, LoadingController} from '@ionic/angular';
import { PostProvider } from '../../../providers/post-provider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-belanjaan',
  templateUrl: './belanjaan.page.html',
  styleUrls: ['./belanjaan.page.scss'],
})
export class BelanjaanPage implements OnInit {

  jualans: any = [];
  limit: number = 100000;
  start: number = 0;
  username: string;
  anggota: any;
  total: string = '';
  loader: any;

  constructor(
    public router: Router,
    private postPvdr: PostProvider,
    public toastController: ToastController,
    private storage: Storage,
    public loading: LoadingController
  ) { }

  ngOnInit() {
  }

  delJualan(id) {
    let body = {
        aksi: 'deletekeranjang',
        jualan_id : id
      };

    this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        this.ionViewWillEnter();
      });
  }

  ionViewWillEnter() {
    this.jualans = [];
    this.start = 0;
    this.loadJualan();
    this.loadTotal
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
  }

  loadJualan() {
    return new Promise(resolve => {
      let body = {
        aksi: 'ambildatakeranjang',
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

  loadTotal() {
    return new Promise(resolve => {
      let body = {
        aksi: 'ambiltotalharga',
      };

      this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        this.total = data.total_harga;
        resolve(true);
      });
    });
  }

  kembali() {
    this.router.navigate(['/tabs']);
  }

  prosesbayar() {
    this.loader = this.loading.create({
      message: 'Tunggu Beberapa Saat...'
    }).then((res) => {
      res.present();
      this.bayar();
      res.onDidDismiss().then((dis) => {
        console.log('Loading Dismissed!');
      });
    });
    this.hideLoader();
    this.router.navigate(['/sukses']);
  }

  hideLoader() {
    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  bayar() {
    return new Promise(resolve => {
      let body = {
        aksi: 'bayar',
      };

      this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        resolve(true);
        
      });

    });
  }

}

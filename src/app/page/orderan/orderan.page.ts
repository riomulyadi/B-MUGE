import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { PostProvider } from '../../../providers/post-provider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-orderan',
  templateUrl: './orderan.page.html',
  styleUrls: ['./orderan.page.scss'],
})
export class OrderanPage implements OnInit {

  jualans: any = [];
  limit: number = 100000;
  start: number = 0;
  username: string;
  anggota: any;

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastController: ToastController,
    private storage: Storage,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.jualans = [];
    this.start = 0;
    this.loadJualan();
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.username = this.anggota.username;
    });
  }

  kembali() {
  	this.router.navigate(['/tokosaya']);
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
        aksi: 'ambildatapesananku',
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

  async konfirmasi(id) {
    const alert = await this.alertCtrl.create({
      header: 'Konfirmasi Pesanan!',
      message: 'Anda ingin mengkonfirmasi pesanan ?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Iya',
          handler: () => {
            this.confirm(id);
          }
        }
      ]
    });
    await alert.present();
  }

  confirm(id) {
    let body = {
      aksi: 'konfirmasi',
      jualan_id : id
    };

    this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
      this.ionViewWillEnter();
    });
  }

  async selesai(id) {
    const alert = await this.alertCtrl.create({
      header: 'Pesanan Selesai!',
      message: 'Pesanan Sudah Siap ?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Iya',
          handler: () => {
            this.done(id);
          }
        }
      ]
    });
    await alert.present();
  }

  done(id) {
    let body = {
      aksi: 'selesai',
      jualan_id : id
    };

    this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
      this.ionViewWillEnter();
    });
  }

}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  saldos: any = [];
  limit: number = 100000;
  start: number = 0;
  username: string;
  anggota: any;

  constructor(public navCtrl: NavController,
    private postPvdr: PostProvider,
    public toastController: ToastController,
    private storage: Storage
    ) {}

  makanan() {
    this.navCtrl.navigateRoot('/makanan');
  }

  pakaian() {
    this.navCtrl.navigateRoot('/pakaian');
  }

  aksesoris() {
    this.navCtrl.navigateRoot('/aksesoris');
  }

  menu() {
    this.navCtrl.navigateRoot('/menulain');
  }

  ionViewWillEnter() {
    this.saldos = [];
    this.start = 0;
    this.loadSaldo();
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.username = this.anggota.username;
    });
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
    this.loadSaldo().then(() => {
    event.target.complete();
    });
    }, 500);
  }

  loadSaldo() {
    return new Promise(resolve => {
      let body = {
        aksi: 'ambilsaldo',
        limit : this.limit,
        start : this.start,
      };

      this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        for (let saldo of data.result) {
          this.saldos.push(saldo);
        }
        resolve(true);
      });
    });
  }

}

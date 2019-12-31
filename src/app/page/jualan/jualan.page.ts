import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../../providers/post-provider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-jualan',
  templateUrl: './jualan.page.html',
  styleUrls: ['./jualan.page.scss'],
})
export class JualanPage implements OnInit {

  jualans: any = [];
  limit: number = 100000;
  start: number = 0;
  username: string;
  anggota: any;

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastController: ToastController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  kembali() {
    this.router.navigate(['/tokosaya']);
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

  delJualan(id) {
    let body = {
        aksi: 'deletejualan',
        jualan_id : id
      };

    this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        this.ionViewWillEnter();
      });
  }

  updatejualan(id) {
    this.router.navigate(['/updatejualan/' + id]);
  }

  loadJualan() {
    return new Promise(resolve => {
      let body = {
        aksi: 'ambildata',
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


}

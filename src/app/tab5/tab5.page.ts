import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  full_name: string;
  anggota: any;
  status: string;

  constructor(    
    private router: Router,
    public navCtrl: NavController,
    private storage: Storage,
    public toastController: ToastController) { }

  ionViewWillEnter() {
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.full_name = this.anggota.full_name;
      this.status = this.anggota.status;
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }
  
  tokosaya() {
  	this.router.navigate(['/tokosaya']);
  } 

  keranjang() {
  	this.router.navigate(['/belanjaan']);
  }

  ngOnInit() {
  }

  topup() {
    this.router.navigate(['/topup']);
  }

  updatestatus(status){
    this.router.navigate(['/status/' + status]);
  }

  async logout() {
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastController.create({
      message: 'Logout successful',
      duration: 2000
     });
    toast.present();

  }

}

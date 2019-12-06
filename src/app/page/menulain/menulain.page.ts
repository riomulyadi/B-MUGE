import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menulain',
  templateUrl: './menulain.page.html',
  styleUrls: ['./menulain.page.scss'],
})
export class MenulainPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  kembali() {
    this.navCtrl.navigateRoot('/tabs');
  }

  makanan() {
    this.navCtrl.navigateRoot('/makanan');
  }

  pakaian() {
    this.navCtrl.navigateRoot('/pakaian');
  }

  aksesoris() {
    this.navCtrl.navigateRoot('/aksesoris');
  }

}

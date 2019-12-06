import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-makanan',
  templateUrl: './makanan.page.html',
  styleUrls: ['./makanan.page.scss'],
})
export class MakananPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  kembali() {
    this.navCtrl.navigateRoot('/tabs');
  }

}

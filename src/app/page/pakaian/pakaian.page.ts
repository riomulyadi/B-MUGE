import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pakaian',
  templateUrl: './pakaian.page.html',
  styleUrls: ['./pakaian.page.scss'],
})
export class PakaianPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  kembali() {
    this.navCtrl.navigateRoot('/tabs');
  }

}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tokosaya',
  templateUrl: './tokosaya.page.html',
  styleUrls: ['./tokosaya.page.scss'],
})
export class TokosayaPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  kembali() {
  	this.navCtrl.navigateRoot('/tabs/tab5');
  }

  ngOnInit() {
  }

}

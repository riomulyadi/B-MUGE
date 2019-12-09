import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.page.html',
  styleUrls: ['./daftar.page.scss'],
})
export class DaftarPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  
  daftar() {
    this.navCtrl.navigateRoot('/tabs');
  }
  
  login() {
	this.navCtrl.navigateRoot('/login');
  }
	
}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(    
    private router: Router,
    public navCtrl: NavController) { }

  tokosaya() {
  	this.router.navigate(['/tokosaya']);
  }

  keranjang() {
  	this.router.navigate(['/keranjang']);
  }

  ngOnInit() {
  }

  topup() {
    this.router.navigate(['/topup']);
  }

}

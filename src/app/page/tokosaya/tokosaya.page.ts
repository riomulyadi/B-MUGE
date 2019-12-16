import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tokosaya',
  templateUrl: './tokosaya.page.html',
  styleUrls: ['./tokosaya.page.scss'],
})
export class TokosayaPage implements OnInit {

  constructor(
    private router: Router,
    public navCtrl: NavController
    ) { }

  kembali() {
  	this.router.navigate(['/tabs/tab5']);
  }

  ngOnInit() {
  }

}

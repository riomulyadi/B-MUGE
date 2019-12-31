import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.page.html',
  styleUrls: ['./topup.page.scss'],
})
export class TopupPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  topup() {
    this.router.navigate(['/tambahsaldo']);
  }

  tarik() {
    this.router.navigate(['/tariksaldo']);
  }

  kembali() {
    this.router.navigate(['/tabs']);
  }
}

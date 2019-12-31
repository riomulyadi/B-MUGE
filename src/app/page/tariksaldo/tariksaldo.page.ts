import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tariksaldo',
  templateUrl: './tariksaldo.page.html',
  styleUrls: ['./tariksaldo.page.scss'],
})
export class TariksaldoPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  kembali() {
    this.router.navigate(['/topup']);
  }

}

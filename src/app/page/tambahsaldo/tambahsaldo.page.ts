import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tambahsaldo',
  templateUrl: './tambahsaldo.page.html',
  styleUrls: ['./tambahsaldo.page.scss'],
})
export class TambahsaldoPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  kembali() {
    this.router.navigate(['/topup']);
  }

}

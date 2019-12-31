import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-belanjaan',
  templateUrl: './belanjaan.page.html',
  styleUrls: ['./belanjaan.page.scss'],
})
export class BelanjaanPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  kembali() {
    this.router.navigate(['/makanan']);
  }

}

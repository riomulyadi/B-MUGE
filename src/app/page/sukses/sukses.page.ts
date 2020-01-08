import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sukses',
  templateUrl: './sukses.page.html',
  styleUrls: ['./sukses.page.scss'],
})
export class SuksesPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  pesanan() {
    this.router.navigate(['/tabs/tab4']);
  }

}

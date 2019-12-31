import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../.././providers/post-provider';
import { async } from 'q';


@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.page.html',
  styleUrls: ['./daftar.page.scss'],
})
export class DaftarPage implements OnInit {
	
  full_name: string = '';
  phone_number: string = '';
  username: string = '';
  password: string = '';
  confirm_password: string = '';

  constructor(
    private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProvider,
  ) { }

  ngOnInit() {
  }

  formLogin() {
    this.router.navigate(['/login']);
  }

  async addRegister() {
    if (this.full_name == '') {
      const toast = await this.toastController.create({
      message: 'Nama lengkap tidak boleh kosong',
      duration: 2000
      });
      toast.present();
    } else if (this.phone_number == '') {
      const toast = await this.toastController.create({
        message: 'No HP tidak boleh kosong',
        duration: 2000
        });
      toast.present();
    } else if (this.username == '') {
      const toast = await this.toastController.create({
        message: 'Username tidak boleh kosong',
        duration: 2000
        });
      toast.present();

    } else if (this.password == '') {
      const toast = await this.toastController.create({
        message: 'Password tidak boleh kosong',
        duration: 2000
        });
      toast.present();

    } else if (this.password != this.confirm_password) {
      const toast = await this.toastController.create({
        message: 'Password tidak sama',
        duration: 2000
        });
      toast.present();
    } else {
      let body = {
        full_name: this.full_name,
        phone_number: this.phone_number,
        username: this.username,
        password: this.password,
        aksi: 'add_register'
      };
      this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {
       var alertpesan = data.msg;
       if (data.success) {
         this.router.navigate(['/login']);
         const toast = await this.toastController.create({
          message: 'Berhasil Daftar Akun ',
          duration: 3000
         });
         toast.present();
       } else {
         const toast = await this.toastController.create({
           message: alertpesan,
           duration: 2000
         });
       }
     });
	}
  }
}

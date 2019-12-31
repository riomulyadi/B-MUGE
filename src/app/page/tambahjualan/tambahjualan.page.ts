import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { async } from 'q';


@Component({
  selector: 'app-tambahjualan',
  templateUrl: './tambahjualan.page.html',
  styleUrls: ['./tambahjualan.page.scss'],
})
export class TambahjualanPage implements OnInit {

  nama_jualan: string = '';
  kat_jualan: string = '';
  harga_jualan: string = '';
  desc_jualan: string = '';
  id: number;

  constructor(    
    private router: Router,
    private postPvdr: PostProvider,
    public toastController: ToastController,
    private actRoute: ActivatedRoute
    ) { }

  ngOnInit() {
  }

  kembali() {
  	this.router.navigate(['/tokosaya']);
  }

  async tambahjualan() {
    if (this.nama_jualan == '') {
      const toast = await this.toastController.create({
        message: 'Nama Jualan Tidak Boleh Kosong',
        duration: 2000
      });
      toast.present();
    }
    else if (this.harga_jualan == '') {
      const toast = await this.toastController.create({
        message: 'Harga Tidak Boleh Kosong',
        duration: 2000
      });
      toast.present();
    }
    else if (this.desc_jualan == '') {
      const toast = await this.toastController.create({
        message: 'Deskripsi Tidak Boleh Kosong',
        duration: 2000
      });
      toast.present();
    }
    else {
      let body = {
        aksi: 'tambah',
        nama_jualan: this.nama_jualan,
        kat_jualan: this.kat_jualan,
        harga_jualan: this.harga_jualan,
        desc_jualan: this.desc_jualan
      };
      this.postPvdr.postData(body, 'file_aksi.php').subscribe( async data => {
        var alertpesan = data.msg;
        if (data.success) {
          this.router.navigate(['/tokosaya']);
          const toast = await this.toastController.create({
            message: 'Jualan Ditambah',
            duration: 2000
          });
          toast.present();
          this.nama_jualan = '';
          this.kat_jualan = '';
          this.harga_jualan = '';
          this.desc_jualan = '';
        } else {
          const toast = await this.toastController.create({
            message: alertpesan,
            duration: 2000
          });
        }
      });
    }
  }


  async updatejualan() {
    if (this.nama_jualan == '') {
      const toast = await this.toastController.create({
        message: 'Nama Jualan Tidak Boleh Kosong',
        duration: 2000
      });
      toast.present();
    }
    else if (this.harga_jualan == null) {
      const toast = await this.toastController.create({
        message: 'Harga Tidak Boleh Kosong',
        duration: 2000
      });
      toast.present();
    }
    else if (this.desc_jualan == '') {
      const toast = await this.toastController.create({
        message: 'Deskripsi Tidak Boleh Kosong',
        duration: 2000
      });
      toast.present();
    }else {
      let body = {
        aksi: 'updatejualan',
        jualan_id : this.id,
        nama_jualan : this.nama_jualan,
        kat_jualan : this.kat_jualan,
        harga_jualan : this.harga_jualan,
        desc_jualan : this.desc_jualan,
      };
      this.postPvdr.postData(body, 'file_aksi.php').subscribe( async data => {
        var alertpesan = data.msg;
        if (data.success) {
          this.router.navigate(['/tokosaya']);
          const toast =await this.toastController.create({
            message: 'Jualan Berhasil Di Update',
            duration: 2000
          });
          toast.present();
        } else {
          const toast =await this.toastController.create({
            message: alertpesan,
            duration: 2000
          });
        }
      });


    }
  }

}

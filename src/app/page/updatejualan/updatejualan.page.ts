import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { async } from 'q';

@Component({
  selector: 'app-updatejualan',
  templateUrl: './updatejualan.page.html',
  styleUrls: ['./updatejualan.page.scss'],
})
export class UpdatejualanPage implements OnInit {

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
    this.actRoute.params.subscribe((data: any) => {
      this.id = data.id;
      this.nama_jualan = data.nama;
      this.kat_jualan = data.kat;
      this.harga_jualan = data.harga;
      this.desc_jualan = data.desc;
      console.log(data);
    });
  }

  kembali() {
  	this.router.navigate(['/jualan']);
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
          this.router.navigate(['/jualan']);
          const toast =await this.toastController.create({
            message: 'Jualan Berhasil Di Update',
            duration: 2000
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

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../../providers/post-provider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-bukajualan',
  templateUrl: './bukajualan.page.html',
  styleUrls: ['./bukajualan.page.scss'],
})
export class BukajualanPage implements OnInit {

  id: number;

  nama_jualan: string ='';
  desc_jualan: string ='';
  harga_jualan: string ='';

  constructor(
    public router: Router,
    private postPvdr: PostProvider,
    public toastController: ToastController,
    private storage: Storage,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.id = data.id;
      this.nama_jualan = data.nama;
      this.desc_jualan = data.desc;
      this.harga_jualan = data.harga;
      console.log(data);
    });
  }

  kembali() {
    this.router.navigate(['/makanan']);
  }

  async beli() {
    let body = { 
      aksi: 'tambahkeranjang',
      nama_jualan: this.nama_jualan,
      desc_jualan: this.desc_jualan,
      harga_jualan: this.harga_jualan
    };
    this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {
      var alertpesan = data.msg;
      if (data.success) {
        const toast = await this.toastController.create({
          message: 'Jajanan Dimasukkan Ke Keranjang',
          duration: 2000
        });
        toast.present();
      } else {
        const toast = await this.toastController.create({
          message: alertpesan,
          duration: 2000
        });
        toast.present();
      }
    });
  }

}

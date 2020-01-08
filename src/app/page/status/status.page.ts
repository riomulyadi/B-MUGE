import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { async } from 'q';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  user_status: string = '';
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
      this.user_status = data.status;
      console.log(data);
    });
  }

  kembali() {
    this.router.navigate(['/tabs/tab5']);
  }

  async update() {
    let body = {
      aksi: 'addstatus',
      user_id: this.id,
      user_status: this.user_status
    };
    this.postPvdr.postData(body, 'file_aksi.php').subscribe( async data => {
      var alertpesan = data.msg;
      if (data.success) {
        this.router.navigate(['/tabs/tab5']);
        const toast =await this.toastController.create({
          message: 'Berhasil Update Status',
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

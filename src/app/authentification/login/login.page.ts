import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private reqService: AuthService,
    private router: Router) { }
form = new FormGroup({
email: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
password: new FormControl('', [Validators.required]),

})
  ngOnInit() {
  }

  ionViewDidEnter(){
    this.reqService.check_auth().subscribe(
      async () => {
        this.router.navigateByUrl('home');
      },
      async () => {

      }
    );

  }

  async confirm(){
    const loading = await this.loadingCtrl.create({message: 'En cours...'});
    await loading.present();
      this.auth.login(this.form.value).subscribe(
        async (data: string) => {
          loading.dismiss();
          localStorage.removeItem('token');
          localStorage.setItem('token',data['token']);
          this.router.navigateByUrl('/');
        },
        async () => {
          const alert = await this.toastCtrl.create({message: "Ces données ne correspondent pas à nos enregstrements...", duration: 3000, color: 'dark'});
          alert.present();
          loading.dismiss();
        }
      );
  }

}

import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num = 0;

  constructor(public alertController: AlertController) {}

  somar(){
    this.num += 1;
  }

  subtrair(){
    this.num -= 1;
  }

  zerar(){
    this.exibirAlerta();
  }

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Você deseja zerar o contador?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('O contador não foi zerado.');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.num = 0;
            console.log('O contador foi zerado.');
          }
        }
      ]
    });

    await alert.present();
  }

}

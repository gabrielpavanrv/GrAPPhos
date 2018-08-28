import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {



  gifWidth:number=576;
  gifHeight:number=297;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
 public escalaGifWidth(fator:number){
    return this.gifWidth*fator;
  }

  public escalaGifHeight(fator:number){
    return this.gifHeight*fator;
  }

  public redirecionar(){
    this.navCtrl.push(TabsPage);



  }

}

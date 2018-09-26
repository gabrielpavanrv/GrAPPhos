import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Mundos } from './mundos'
/**
 * Generated class for the ExplorarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explorar',
  templateUrl: 'explorar.html',
})
export class ExplorarPage {

  mundos:Mundos = new Mundos();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  startExplocaracao(nomeExploracao:string)
  {
    this.navCtrl.push(nomeExploracao);
  }


}

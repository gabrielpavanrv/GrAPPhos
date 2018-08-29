import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LessonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lesson',
  templateUrl: 'lesson.html',
})
export class LessonPage {

  lesson:string = "Hello";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lesson = this.navParams.get('lesson')
  }

  popPage(){
    this.navCtrl.pop()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonPage');
  }

}

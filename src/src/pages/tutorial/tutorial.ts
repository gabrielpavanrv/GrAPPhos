import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tutorial } from './content'

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  topics:Tutorial[] = [
    {topic:'Introdução a Teoria dos Grafos', id:1 },
    {topic: 'Classes comuns de Grafos', id:2},
    {topic: 'Propriedades do Grafo Completo', id:3},
    {topic: 'Propriedades do Grafo Bipartido', id:4},
    {topic: 'Isomorfismo', id:5},
    {topic: 'Teoremas Importantes', id:6},
    {topic: 'Coloração', id:7},
    {topic: 'Algoritmos Em Grafos', id:8},
    {topic: 'Árvores Binárias', id:9},
    {topic: 'Árvore AVL', id:10},
    {topic: 'Árvore Rubro Negra', id:11}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  startLesson(lessonName){
    this.navCtrl.push('LessonPage', {
      lesson: lessonName
    })
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

}

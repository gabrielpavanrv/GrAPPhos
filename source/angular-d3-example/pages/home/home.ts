import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GrafoGeralProvider } from '../../providers/grafo-geral/grafo-geral';
import * as cytoscape from './../../assets/cytoscape'
import { ConfiguracoesDeCriacao } from '../../model/configuracoesDeCriacao';



var contagem:number = 0;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {



  configuracoesDeCriacao:ConfiguracoesDeCriacao;

  constructor(public navCtrl: NavController, public grafoGeralProvider:GrafoGeralProvider) {


  }
  ionViewDidLoad() {

    this.configuracoesDeCriacao = new ConfiguracoesDeCriacao();
    let grafoInterface:any = this.grafoGeralProvider.gerarGrafo(this.configuracoesDeCriacao);
    this.grafoGeralProvider.adicionarEventosAreaDeDesenhoGrafoGeral(grafoInterface,this.configuracoesDeCriacao);
  
}
}
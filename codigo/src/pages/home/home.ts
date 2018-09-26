import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GrafoGeralProvider } from '../../providers/grafo-geral/grafo-geral';
import * as cytoscape from './../../assets/cytoscape'
import { ConfiguracoesDeCriacao } from '../../model/configuracoesDeCriacao';
import { ModalController } from 'ionic-angular';
import { ConfiguradorDeAreaDeDesenho } from '../../model/configuradorDeAreaDeDesenho';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  configuracoesDeCriacao:ConfiguracoesDeCriacao;
  grafoInterface:any
  configuradorDeAreaDeDesenho:ConfiguradorDeAreaDeDesenho;

  constructor(public navCtrl: NavController) {
    this.configuradorDeAreaDeDesenho=new ConfiguradorDeAreaDeDesenho();

  }
  ionViewDidLoad() 
  {
    this.configuracoesDeCriacao = new ConfiguracoesDeCriacao();
    this.grafoInterface= this.configuradorDeAreaDeDesenho.gerarGrafo("cy");
    this.configuradorDeAreaDeDesenho.adicionarEventosAreaDeDesenhoGrafoGeral(this.grafoInterface,this.configuracoesDeCriacao);
  }

  clicouDimensionar(){

    this.configuracoesDeCriacao.possivelCriarNo=0;
  }

  clicouGerar(){

    this.configuracoesDeCriacao.possivelCriarNo=1;
  }


}

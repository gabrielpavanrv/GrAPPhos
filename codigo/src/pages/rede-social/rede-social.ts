import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConfiguracoesDeCriacao} from '../../model/configuracoesDeCriacao';
import {ConfiguradorDeAreaDeDesenho} from '../../model/configuradorDeAreaDeDesenho';
import {ConstrutorDeGrafoTeorico} from '../../model/ConstrutorDeGrafoTeorico';
import { ConfiguradorDeLatex } from '../../model/ConfiguradorDeLatex';

@IonicPage()
@Component({
  selector: 'page-rede-social',
  templateUrl: 'rede-social.html',
})
export class RedeSocialPage {

  public graph:any;
  public config_c:ConfiguracoesDeCriacao;
  public config_d:ConfiguradorDeAreaDeDesenho;
  public vertices:string = "\\{ \\}";
  public arestas:string = "\\{ \\}";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.config_d = new ConfiguradorDeAreaDeDesenho();
  } 

  atualizarEquacaoLatex() {
    let const_gt: ConstrutorDeGrafoTeorico = new ConstrutorDeGrafoTeorico();
    let Grafo_teo = const_gt.construirGrafoTeorico(this.graph, 1);
    let objetoEquacoesDoGrafo:any =  ConfiguradorDeLatex.construirFormalismoGrafo(Grafo_teo);
    this.vertices = objetoEquacoesDoGrafo.vertices;
    this.arestas = objetoEquacoesDoGrafo.arestas;
  }

  
  ionViewDidLoad() {
    this.graph = this.config_d.gerarGrafo("cyRS");
    this.config_c = new ConfiguracoesDeCriacao();
    this.config_d.adicionarEventosAreaDeDesenhoGrafoGeral(this.graph, this.config_c, "redes-sociais");
    this.config_c.contagem=0;
  }

}

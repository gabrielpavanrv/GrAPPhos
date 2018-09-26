import {
  Component
} from '@angular/core';


import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';


import {ConfiguracoesDeCriacao} from '../../model/configuracoesDeCriacao';
import {ConfiguradorDeAreaDeDesenho} from '../../model/configuradorDeAreaDeDesenho';
import {ConstrutorDeGrafoTeorico} from '../../model/ConstrutorDeGrafoTeorico';
import { ConfiguradorDeLatex } from '../../model/ConfiguradorDeLatex';


@IonicPage()
@Component({
  selector: 'page-explorar-constelacoes',
  templateUrl: 'explorar-constelacoes.html',
})
export class ExplorarConstelacoesPage {


  //Os conjuntos para o katex do grafo
  vertices: string = "\\{ \\}";
  arestas: string = "\\{ \\}";


  isSelecionadoBotao: any;
  configuracoesDeCriacao: ConfiguracoesDeCriacao;
  grafoInterface: any;
  configuradorDeAreaDeDesenho: ConfiguradorDeAreaDeDesenho;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.configuradorDeAreaDeDesenho = new ConfiguradorDeAreaDeDesenho();
  }

  ionViewDidLoad() {
    this.configuracoesDeCriacao = new ConfiguracoesDeCriacao();
    this.grafoInterface = this.configuradorDeAreaDeDesenho.gerarGrafo("cyExplorar");
    this.configuradorDeAreaDeDesenho.adicionarEventosAreaDeDesenhoGrafoGeral(this.grafoInterface, this.configuracoesDeCriacao, "explorar-constelacoes-1");
    this.configuracoesDeCriacao.contagem=0;

  }

  atualizarEquacaoLatex() {
    let construtorDeGrafoTeorico: ConstrutorDeGrafoTeorico = new ConstrutorDeGrafoTeorico();
    let GrafoTeorico = construtorDeGrafoTeorico.construirGrafoTeorico(this.grafoInterface, 1);
    let objetoEquacoesDoGrafo:any =  ConfiguradorDeLatex.construirFormalismoGrafo(GrafoTeorico)
    this.vertices = objetoEquacoesDoGrafo.vertices;
    this.arestas = objetoEquacoesDoGrafo.arestas;
  }

  clicouDimensionar() {

    this.configuracoesDeCriacao.possivelCriarNo = 0;
  }

  clicouGerar() {

    this.configuracoesDeCriacao.possivelCriarNo = 1;
  }

  clicouLimpar(){

    this.grafoInterface.destroy();
    this.grafoInterface = this.configuradorDeAreaDeDesenho.gerarGrafo("cyExplorar");
    this.configuradorDeAreaDeDesenho.adicionarEventosAreaDeDesenhoGrafoGeral(this.grafoInterface, this.configuracoesDeCriacao, "explorar-constelacoes-1");
    this.atualizarEquacaoLatex();
    this.configuracoesDeCriacao.contagem=0;
  }


  startNextPage(){
    this.navCtrl.push('ExplorarConstelacoes_2Page',{grafo: this.grafoInterface.json()});
  }
}

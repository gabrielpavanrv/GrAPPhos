
import { ConfiguracoesDeCriacao } from './configuracoesDeCriacao';



export class PintorGeral {
    getRandomColor() {
        var letters: string = '0123456789ABCDEF';
        var color: string = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    pintarNo(cy:any, configuracoesDeCriacao: ConfiguracoesDeCriacao, evt:any, configuracaoDeEstilo?:any) {

        var no:any;
        var config:any = {
            id: 1,
            group: "nodes",
            data: { weight: 10, label: configuracoesDeCriacao.contagem },
            position: { x: evt.position.x, y: evt.position.y },
        }
        
        if (!configuracaoDeEstilo) {
            config.style = {
                'background-opacity': 0,
                'border-width': 2,
                'border-color': 'white',
                "text-valign": "center",
                "text-halign": "center",
                "color": "#ffffff"
            }

        } else {
            switch (configuracaoDeEstilo) {
                case "explorar-constelacoes-1":{
                    config.style = {
                        'background-image': '../assets/imgs/star_blue.png',
                        'background-fit': 'cover',
                        'background-opacity': 0,
                        "text-valign": "center",
                        "text-halign": "center",
                        "color": "#ffffff"
                    }               
                }break;
                
                case "redes-sociais":{
                    config.style = {
                        "text-valign": "center",
                        "text-halign": "center",
                        'background-color': 'black'  
                    }
                }break;
            }
        }
        
        no = cy.add(config);
        return no
    }

    pintarAresta(cy: any, configuracoesDeCriacao: ConfiguracoesDeCriacao, no: any) {

        if (configuracoesDeCriacao.noAnterior != no) {
            var aresta = cy.add({
                data:
                {
                    label: '1',
                    source: configuracoesDeCriacao.noAnterior.id(),
                    target: no.id(),
                    directed: true,
                    style: {
                        'line-color': '#FFF'
                    }
                }
            });
        }
        
        aresta.style('line-color', '#ccffff');
        aresta.style('opacity', '0.5');
        return aresta;
    }

    constructor() {

    }


}
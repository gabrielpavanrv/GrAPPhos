
import { ConfiguracoesDeCriacao } from './configuracoesDeCriacao';




export class PintorGeral {
    getRandomColor() {
        var letters:string = '0123456789ABCDEF';
        var color:string = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    

 pintarNo(cy:any,configuracoesDeCriacao: ConfiguracoesDeCriacao,evt:any){

    
    var no:any = cy.add(
        {
          id: 1,
          group: "nodes",
          data: { weight: 10, label: configuracoesDeCriacao.contagem},
          position: { x: evt.position.x, y:evt.position.y  },
          style:{
            'background-color': 'black',
            'border-width': 2,
            'border-color': 'white',
            "text-valign": "center",
            "text-halign": "center",
            "color":"#ffffff"

          }
        
        });
        return no;

}




pintarAresta(cy:any,configuracoesDeCriacao: ConfiguracoesDeCriacao,no:any){
    

    if(configuracoesDeCriacao.noAnterior!=no){
    var aresta = cy.add({ data:
        {label:'1', 
         source:configuracoesDeCriacao.noAnterior.id() ,
         target: no.id(),
         directed :true
         }});
        }
    return aresta;


}    







    constructor(){

    }


}
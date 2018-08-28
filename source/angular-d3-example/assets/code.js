var cy;
var contagem = 0;


function iniciar_grafo(){


     cy = window.onload = cytoscape({
        container: document.getElementById('cy'),
        style: [
          {
            selector: 'node',
            style: {
              'label': 'data(label)'
            }
          }
        ]
    });



  
    cy.on('tap',(evt)=>{

        contagem++;

        console.log(evt);
        var noAdicionado =  cy.add(
            {
              id: 1,
              group: "nodes",
              data: { weight: 10, label: contagem},
              position: { x: evt.position.x, y:evt.position.y  },
              
            
            });
    


            console.log(noAdicionado);
    });







}












function ff(evt){



}



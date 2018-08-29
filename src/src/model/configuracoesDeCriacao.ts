export class ConfiguracoesDeCriacao {

    public noAnterior:any;
    public contagem:number;
    public possivelCriarNo:number;
    public possivelCriarAresta:number;

    constructor(){

        this.possivelCriarNo=this.contagem = 1;
        this.possivelCriarAresta = 0;
        this.noAnterior=undefined;
    }


}
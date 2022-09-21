import {conta} from "./conta.js";

 export class contaCorrente extends conta{
    static numeroDeContas = 0;
        
    
    // set protege contra alterações e faz com o que o cliente não seja alterado
    // nao recebe tipos primitivos
    //ou seja se a propriedade for alterada para contaCorrenteRicardo.cliente = 0; nao ira alterar
    //pois so recebe cliente

    constructor(cliente, agencia){
      super(0, cliente, agencia)
        contaCorrente.numeroDeContas += 1;
    }
    
  //sobreescrevendo o comportamento de sacar
    sacar(valor){
      let taxa = 1;
      return this._sacar(valor, taxa);
         }
        }

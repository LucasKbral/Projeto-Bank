
//classe abstrata

export class conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == conta){
            throw new Error("Você não deveria instaciar um objeto do tipo conta,Pois ela é uma classe Abstrata!!!")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    // Assesores de encapsulamento
    
    set cliente(novoValor){
    if(novoValor instanceof Cliente)
    this._cliente = novoValor;

}


   get saldo(){
    return this._saldo
}

   get cliente(){
   return this._cliente;
}
  
//Método abstrato
    sacar(valor){
        throw new Error("O Método sacar da conta é abstrato")
    }


    sacar(valor){
       
    let taxa = 1.4;
    return this._sacar(valor, taxa)
    }
  
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado){
           this._saldo -= valorSacado;
           return valorSacado;
       }
    return 0;
    
}

   depositar(valor){
       if(valor > 0 ){
           this._saldo += valor;
       }
      
   }
   tranferir(valor, conta){
  
       const valorSacado = this.sacar(valor);
  
       conta.depositar(valorSacado);
   }
   teste(){
    console.log("teste na classe conta")
  }
  
}
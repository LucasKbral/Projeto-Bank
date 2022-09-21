/*
ser autenticavel significa ter o método autenticar

Duck typing (ducktype) / não intereça o tipo do dele mas sim o que aquele objeto consegue fazer
O que intereça é se tem métodos e propriedades
*/

export class SistemaAutentificacao{
    static login(autenticavel, senha){
        if(SistemaAutentificacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha)   
        }
         return false;
      

    }
static ehAutenticavel(autenticavel){
    return "autenticar" in autenticavel && 
    autenticavel.autenticar instanceof Function
    
  }
}

// coisas muitos importantes em orientação a objetos POLIFORMISMO E ENCAPSULAMENTO
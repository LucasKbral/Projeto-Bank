import {Cliente} from "./Cliente.js";
import{Gerente} from "./Funcionario/Gerente.js"
import{Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutentificacao} from "./SistemaAutentificacao.js";


const diretor = new Diretor("Edson", 10000, 12345678900 )

diretor.cadastrarSenha("123456789")

const gerente = new Gerente("Pedro", 5000, 12306593441)
gerente.cadastrarSenha("123")

const cliente = new Cliente("Rosana", 45933228912, "456")

const gerenteEstaLogado = SistemaAutentificacao.login(gerente, "123")

const diretorEstaLogado = SistemaAutentificacao.login(diretor, "123456789")

const clienteEstaLogado = SistemaAutentificacao.login(cliente, "456")

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)






//contaCorrenteLucas.saldo = 3000; getter protege contra alterações

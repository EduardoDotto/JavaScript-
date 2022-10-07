//ATIVIDADE IMC
const vet=[];
function calcImc(pessoa){
    console.log(pessoa);
    imc=pessoa.massa/(pessoa.altura*pessoa.altura)
    return imc.toFixed(2);
}
function situacao(pessoa){
    let classificacao;
    if (pessoa.imc <= 18.5)
    classificacao="Magro"
    if (pessoa.imc > 18.5 && pessoa.imc <=25 )
    classificacao="Normal"
    if (pessoa.imc > 25 && pessoa.imc <= 30)
    classificacao="Sobrepeso"
    if (pessoa.imc >= 30 && pessoa.imc <=40)
    classificacao="Obesidade"
    if (pessoa.imc >40)
    classificacao="Tu vai morre"
    return classificacao
}

function addPessoa(){
let pessoa = {};
pessoa.nome = prompt("Digite seu nome");
pessoa.massa = prompt("Digite seu peso (kg)");
pessoa.altura = prompt("Digite sua altura (m)");
pessoa.imc = calcImc(pessoa);
pessoa.classificacao = situacao(pessoa);
vet.push(pessoa);
console.table(vet);
alert(pessoa.classificacao+"!!!");
}
addPessoa();
addPessoa();
addPessoa();

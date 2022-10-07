// console.log("Ola");
// function soma (n1,n2){
// return parseInt(n1) + parseInt(n2);;
// }

// function subtracao (n1,n2){
//     menos = n1-n2;
//     return menos;
//     }

// function multi (n1,n2){
//     return n1*n2;
// }

// function divi (n1,n2){
//     return n1/n2;
// }

// function vemvaca (n1,n2,vaca){
//     return vaca(n1,n2);
// }

// function pot (n1,n2){
//     return Math.pow(n1,n2)
// }

// function percent (n1,n2){
//     return n2*100/n1
// }

// function calculadora (){
//     n1 = prompt("Insira o primeiro numero.");
//     n2 = prompt("Insira o segundo numero.");
//     operacao = prompt("Operação desejada: | + | - | / | * | pot | % |");
//     if (operacao == "+")
//     result = soma(n1,n2);
//     if (operacao == "*")
//     result =  multi(n1,n2);
//     if (operacao == "-")
//     result = subtracao(n1,n2);
//     if (operacao == "/")
//     result = divi(n1,n2);
//     if (operacao == "pot")
//     result = pot(n1,n2);
//     if (operacao == "%")
//     result = percent(n1,n2);

//     alert ("O valor de "+ n1+ " " + operacao + " " + n2 + " = "+ result);
// return result;
// }

// let vetor = ["banana","milho", "cerveja"];
// function mostraItem(item){
//     console.log("MEu item é "+item)
// }
// vetor.forEach(mostraItem); // ForEach mostra os elementos do vetor

// let vector = [0,1,2,3,4,5,6,7,8,9];

// function duplicar(item){
//     return item*2;
// }

//vector2=vector.map(duplicar);
//console.log(vector);
//console.log(vector2);

let vetfim=[];
let par=[];
let impar=[];
for (i = 0; i<=100; i++){
    vetfim[i] = i;
}

function parimpar(item){
if (item%2==0){
    return par.push(item);
}else
    return impar.push(item);
}

vetfim.map(parimpar)
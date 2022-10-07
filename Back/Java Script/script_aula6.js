console.log("Aula6");
let contador=0;
for(i=0; i<100; i++){
    if(i%7==0)
    contador++;
}
let impar=[];
console.log("NUmero de multiplos de 7: "+contador);
let pos=0;
for(i=0; i<100; i++){
    if((i%2!=0) && (i%3==0)){
    impar[pos]=i;
    pos++;}
}
console.table(impar)
console.log("NUmeros impares e de multiplos de 3: "+impar);

let pos2=0;
let parn4=[];
for(i=0; i<100; i++){
    if((i%2==0) && (i%4!=0)){
    parn4[pos2]=i;
    pos2++;}
}
console.log("NUmeros pares e n multiplos de 4: "+parn4);
console.log("contador: "+pos2);
let numero;
function tabuada (numero){
    for (let i=1;i<=10;i++){
        let resultado = numero * i;
        console.log(numero+" x "+i+" = "+resultado);
    }
}
//numero = prompt("Insira um numero da tabuada");
numero=9;
tabuada (numero);
// Lista de compras
lista=[];
let item;
function compras (lista){
    while(item!="fim" && item!="FIM"){
        item = prompt("Insira um item a lista");
        lista.push(item);
    }
    lista.pop();
}
compras(lista);
(console.table(lista));
alert(lista);

const filmes =[];

function adicionar(titulo, ano){
    let filme = {};
    filme.titulo = titulo;
    filme.ano = ano;
    filmes.push(filme);
    console.table(filmes);
}
adicionar("a casa do terror", 2004)
adicionar("a casa do jão", 2005)

 const exibidos = [];

function exibir(pos){
    let exibidos= {};
    exibidos.push = filme[pos];
   console.log(exibidos);
}

exibir (0);
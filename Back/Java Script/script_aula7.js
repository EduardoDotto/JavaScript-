const fruta1 = {
    nome: "maçã",
    cor: "vemelha",
    quantidade: 02,
    madura: false,
    amadurecer(){
        if (!fruta1.madura){
            console.log("A fruta vai amadurecer");
            fruta1.madura=true
        } else {
            console.log("Se amadurecer mais apodrece")
        }
    },
    defineQuantudade(numero){
        this.quantidade=numero
    }
    
}
console.log(fruta1.cor);
const fruta2 = {
    nome: "pera",
    cor: "verde",
    quantidade: 01,
    madura: true
}
const fruta3 = {
    nome: "limão",
    cor: "verde",
    quantidade: 03,
    madura: false
}
const fruta4 = {
    nome: "morango",
    cor: "vermelho",
    quantidade: 10,
    madura: true
}
const fruta5 = {
    nome: "manga",
    cor: "vermelho",
    quantidade: 1,
    madura: true
}
const cesta1 = {
    proprietario: "Rodolfo",
    material: "vime",
    frutas: [fruta1,fruta2,fruta3]
}
console.log(cesta1);
const cesta2 = {
    proprietario: "Dotto",
    material: "vime",
    frutas: [fruta1,fruta3,fruta4]
}
const cesta3 = {
    proprietario: "Rafa",
    material: "vime",
    frutas: [fruta1,fruta4,fruta5]
}
const cesta4 = {
    proprietario: "Math",
    material: "Plastico",
    frutas: [fruta1,fruta4,fruta5]
}
const cesta5 = {
    proprietario: "Luiz",
    material: "Cimento",
    frutas: [fruta1,fruta2,fruta3,fruta4,fruta5]
}
const mesa = {
    cestas: [cesta1,cesta2,cesta3,cesta4,cesta5],
    quantidadeCestas : 0
}
mesa.quantidadeCestas=mesa.cestas.length;
console.log(fruta1.amadurecer());
fruta1.defineQuantudade(5);
console.log(fruta1.quantidade);

function funcaoDeFora(){
    console.log("Fazendo a Função");
    return ("Retorno da função")
}
funcaoDeFora()
function funcaoDeFora() {
    console.log("fazendo a funcao");
    return ("retorno da funcao");
}

const obj = {
    nome: "nome obj",
    funcao: funcaoDeFora()
}

console.log(obj);

function contador(cesta){
let totaldefrutas=0;
for (i=0;i<cesta.frutas.length;i++){
    totaldefrutas+=cesta.frutas[i].quantidade;
    
}
console.log("O total de frutas eh: "+totaldefrutas);
}
contador(cesta1)

let frase = "Minha frase aqui"
frase.toLocaleUpperCase(); //Maiuscula.
frase.toLocaleLowerCase(); //Minuscula.
frase.repeat(5); // Repete a frase X vezes.
frase.length // Tamanho da string.
frase.replace('frase','palavra'); // Busca uma string e troca por outra, mas não altera a orginal (Obs: apenas a primeira ocorrência).
frase = "uma, frase, cheia, de, vircula, vamos, fazer, um, vetor";
frase.split(","); //Pega um bagulho e transforma num vetor.
function somatoria(num1=1, num2=2){
    return num1+num2
}
//Definir uma valor dentro da função ai esse valor é o default se não inserir paramentros 
somatoria();//Retorna NaN ou 3
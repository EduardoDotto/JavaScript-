console.log("oi script")
const c1 = "primeira constante"
// const trava a variavel, seu valor não pode ser alterado
/*const vetor=[1,2,3,4,5]
console.log(vetor)
vetor[3]="mudou"
console.log(vetor)*/
let D=[1,2,3]
D=5
const E=[1,2,3]
//E=5 //ESSA OPERAÇÃO NÃO VAI FUNCIONAR AGORA
const obj={nome:"nominho"}
console.log(obj)
obj.idade=5
console.log(obj)

let vetor = [1,2,3];
console.log(vetor);
vetor[10]=true;
console.log(vetor);
tam=vetor.length;
function alterafinal(vetor,tam){
    
    vetor[tam]="final";
}
console.log("O tamanho do vetor eh: "+tam);
alterafinal(vetor,tam);
console.log(vetor);
typeof(D);
typeof(vetor);
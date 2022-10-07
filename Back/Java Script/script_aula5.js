console.log("Aula5");
let resultado;
function somar (){
    resultado = 20 + 30;
    return resultado;
}
somar();
console.log(resultado);

function soma (num1, num2){
    return(num1 + num2);
}
let numero = soma(15,25);
console.log (numero);

const vetor = [2,3,4,5,6,7,8];
console.log(vetor);
/*let outrovetor = vetor;
console.log(outrovetor);

vetor[1] = "Elemento 1";
console.log(outrovetor); //Alterando vetor ele altera ou outrovetor
*/
vetor.slice();
let outrovetor = vetor.slice();
let fatia = vetor.slice(2,5);
console.log(fatia);
// Crie uma função que remova os 
//itens nulos ou negativos de 
//um vetor.

const vet = [15,-10,6,1,0,-4,-9, '', null]
const positivos =[]
const negativos = [];
const zeros = []

function verifica(){
    
    for(let i = 0; i<vet.length; i++){
        if (vet[i]< 0 ){
            negativos.push(vet[i]);
            vet.splice(i,1);
            //negativos.push(parseInt(vet.splice(i,1)))
            i--
        }
        else if (vet [i]==0 || vet[i]== null){
            let valorRemovido = vet.splice(i,1);
            zeros.push(valorRemovido[0]);
            i--
        }
    }
}


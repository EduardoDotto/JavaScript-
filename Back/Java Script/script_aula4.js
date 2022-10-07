let fila_normal = [];
let fila_prioritaria= [];
let fila_atendido = [];

class Cliente {
  constructor(name, tipo) {
    this.name = name;
    this.tipo = tipo;
  }
}

function cadastrarCliente(){
    tipo = prompt('Tipo');
    nome = prompt('Nome');

    if(tipo == 'N'){
      fila_normal.push(new Cliente(nome, 'N'));
      alert('Total de clientes na fila normal: ' + fila_normal.length);
    }
    if(tipo == 'P'){
      fila_prioritaria.push(new Cliente(nome, 'P'));
      alert('Total de clientes na fila prioritaria: ' + fila_prioritaria.length);
    }
}

function MostrarMenu() {
  let opcao
  do{
    opcao = prompt("Digite a opcao desejada:\n\n" +
    "1 - Cadastrar cliente na fila.\n" +
    "2 - Chamar atendimento normal.\n" +
    "3 - Chamar atendimento prioritario.\n" +
    "4 - Exibir clientes já atendidos.\n")
    opcao = parseInt(opcao);
    switch (opcao) {
      case 1:
          cadastrarCliente()
          break;
      case 2: 
          atender(fila_normal)
          break;
      case 3: 
          atender(fila_prioritaria)
          break;
      case 4: 
          mostra_atendidos()
          break;
      }  
  }while(parseInt(opcao) < 4); 
}

function atender(fila){
  if(fila.length > 0){
    cliente = fila.shift();
    fila_atendido.push(cliente);
  }
}

function mostra_atendidos(){
  alert('Foram atendidos ' + fila_atendido.length + ' clientes');
  console.log(fila_atendido);
}

MostrarMenu();
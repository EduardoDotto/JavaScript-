
nascimento=prompt("Informe seu ano de nascimento");
atual=prompt("Informe o ano atual");
anos=atual-nascimento;
meses=anos*12;
dias=meses*30;
semanas=dias/7;
alert("Sua idade e: "+anos.toFixed(2)+" anos ou "+meses.toFixed(2)+" meses ou "+semanas.toFixed(2)+" semanas ou "+dias.toFixed(2)+" dias");


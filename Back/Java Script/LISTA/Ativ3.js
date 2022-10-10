Regular=prompt("Informe a quantidade de horas regulares ");
Irregular=prompt("Informe a quantidade de horas extras ");
Bruto=Regular*10+Irregular*15;
Liquido=Bruto*0.9;
result="Bruto: "+Bruto+" Liquido: "+Liquido;
alert(result);
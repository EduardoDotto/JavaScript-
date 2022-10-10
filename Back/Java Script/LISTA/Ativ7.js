m1=prompt("Digite a quantidade de moedas de 1 centavo");
m5=prompt("Digite a quantidade de moedas de 5 centavos");
m10=prompt("Digite a quantidade de moedas de 10 centavos");
m25=prompt("Digite a quantidade de moedas de 25 centavos");
m50=prompt("Digite a quantidade de moedas de 50 centavos");
m100=prompt("Digite a quantidade de moedas de 1 Real");
Total=m1*0.01+m5*0.05+m10*0.1+m25*0.25+m50*0.5+m100*1;
result="R$ "+Total.toFixed(2);
alert(result);

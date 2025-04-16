/*function imc(altura, peso) {
   return (peso/(altura*altura)); 
}
let altura = prompt("Digite sua altura");
let peso = prompt("Digite seu peso");
//console.log(altura);
console.log(imc(altura,peso));*/

function fatorial (numero) {
      let fact = 1;
      for(let i = 1; i <= numero; i++){
         fact =  fact * i;
         //console.log(fact);     
      }
      return fact;
}
let number = prompt("Digite um número");
console.log(fatorial(number));

/*function conversor(dolar) {
   let real = dolar * 4.80;
   return real; 
}
let valor = prompt("Digite o valor em dólar");
console.log(conversor(valor));*/

/*function area_e_peri (altura, largura) {
   let area = largura * altura;
   console.log(`A área é igual a ${area}`);
   let perimetro = (2 * altura) + (2 * largura);
   console.log(`O perímetro é igual a ${perimetro}`);
}
let alt = prompt("Digite a altura:");
let larg = prompt("Digite a largura:")
area_e_peri(alt,larg);*/

/*function area_e_peri (raio) {
   let area = 3.14 * (raio * raio);
   console.log(`A área é igual a ${area}`);
   let perimetro = 2 * 3.14 * raio;
   console.log(`O perímetro é igual a ${perimetro}`);
}
let r = prompt("Digite o raio");
area_e_peri(r);*/

/*function tabuada (numero) {
   const tab = numero;
   for(let i = 1; i <= 10; i++){
      let produto =  tab * i;
      console.log(`O número ${numero} multiplicado por ${i} é igual a ${produto}`);     
   } 
}
let number = prompt("Digite um número");
console.log(tabuada(number));*/
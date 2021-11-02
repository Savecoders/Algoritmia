//multplicar numeros sin signo de mulplicacion
// ! mi solucion
/* const multplicar = (a,b)=>{
  let cont = 0;
  const signo = Math.abs(b)==b
  for(let i=0; i<Math.abs(b);i++){
    cont= signo ? cont + a: cont - a
  }
  return cont;
} */
// ! matematicas
const multplicar = (a, b) => a / (1 / Math.abs(b));
let result = multplicar(2, -3);
console.log(result);

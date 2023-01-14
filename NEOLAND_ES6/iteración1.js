/*Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametro */

const sum = (a = 10,b = 5) => a + b;
console.log(sum()); //devuelve 15 porque suma los parametros default

console.log(sum(1)); //devuelve 6 porque sustituye a por 1 y lo suma a b default

console.log(sum(1,1)); //devuelve 2 

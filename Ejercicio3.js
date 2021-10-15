
let N = prompt("Ingrese un número");

var miArray = new Array(N);

for (i=0; i < N; i++)
{
    miArray[i] = Math.random();
}

console.log(miArray)
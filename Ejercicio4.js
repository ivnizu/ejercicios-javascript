var miArray = new Array(9,3,4,6,1,2,0);

console.log("Lista desordenada: ", miArray);

var aux=0;             

for (i=1;i<miArray.length;i++)
{
       for (j=0; j < miArray.length-i ;j++) 
       {
          if (miArray[j] > miArray[j+1])
          {
            aux=miArray[j];
            miArray[j]=miArray[j+1];
            miArray[j+1]=aux;
          }
       }
}

console.log("Lista ordenada: ", miArray);
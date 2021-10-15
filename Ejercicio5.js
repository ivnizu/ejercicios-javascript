var var1 = new Array(1,2,4,6,7,8);
var var2 = new Array(1,2,4,5,6,7,8);

const var3 = var1.concat(var2);

var aux=0;             

for (i=1;i<var3.length;i++)
{
       for (j=0; j < var3.length-i ;j++) 
       {
          if (var3[j] > var3[j+1])
          {
            aux=var3[j];
            var3[j]=var3[j+1];
            var3[j+1]=aux;
          }
       }
}

console.log("Lista ordenada: ", var3);

var miArray = [1,2,3,4,5,7]; 
var copiaArray = new Array(miArray.length);

console.log("miArray= ", miArray);

for(i = 0; i < miArray.length; i++)
{
    copiaArray[i] = miArray[i]+1;
}

console.log("copiaArray", copiaArray);
var letras="QWERTASDFGZXCVBYUIOPHJKLÑNM";


function CantidadMayusculas(texto)
{
    let cant=0;
    for(i=0; i<texto.length; i++)
    {
        if(letras.indexOf(texto.charAt(i),0)!=-1)
        {
            cant++;
        }
    }
    return cant;
}

console.log(CantidadMayusculas("aAbBcCdD"));
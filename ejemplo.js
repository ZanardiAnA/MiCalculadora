let opcion=prompt ("¿Que operacion desea realizar?(suma, resta, multiplicacion, division")

if (opcion=="suma"){
let numA=prompt ("ingrese un numero")
let numB=prompt ("ingrese otro numero")

function sumar( numA, numB){
return numA+numB;
}

numA= Number(numA)
numB= Number(numB)

let resultado=prompt("su resultado es:", sumar(numA, numB))
}
else if (opcion=="resta"){
let num1=prompt ("ingrese un numero")
let num2=prompt ("Que numero desea restarle")

function restar( numA, numB)
{
    return numA-numB;
}
num1= Number(num1)
num2= Number(num2)
let resultado=prompt("su resta da", restar(num1, num2))
}

else if (opcion=="multiplicacion"){
    let numa=prompt ("inserte un numero")
    let numb=prompt ("por cual numero desea multiplicarlo")

    function multiplicacion(numa, numb)
{
    return numa*numb;
}
numa= Number(numa)
numb= Number(numb)
let resultado=prompt("la multiplicacion da",multiplicacion(numa,numb))
}

else if (opcion== "division"){

    let numx=prompt ("inserte un numero")
    let numo=prompt ("por cual numero desea dividirlo")

    function division(numx, numo)

    {
        return numx/numo;
    }
    numx=Number(numx)
    numo=Number(numo)
    let resultado=prompt("su division da", division(numx, numo))
}




function sumar() {
    let valor1=parseInt(document.getElementById("valor1").value);
    let valor2=parseInt(document.getElementById("valor2").value);
    document.getElementById("el-resultado").innerHTML = valor1+valor2;
    document.getElementById("eleccion").innerHTML = "suma"
}

function restar() {
    let valor1=parseInt(document.getElementById("valor1").value);
    let valor2=parseInt(document.getElementById("valor2").value);
    document.getElementById("el-resultado").innerHTML = valor1-valor2;
    document.getElementById("eleccion").innerHTML = "resta"
}

function multiplicar() {
    let valor1=parseInt(document.getElementById("valor1").value);
    let valor2=parseInt(document.getElementById("valor2").value);
    document.getElementById("el-resultado").innerHTML = valor1*valor2;
    document.getElementById("eleccion").innerHTML = "multiplicacion"
}

function dividir() {
    let valor1=parseInt(document.getElementById("valor1").value);
    let valor2=parseInt(document.getElementById("valor2").value);
    document.getElementById("el-resultado").innerHTML = valor1/valor2;
    document.getElementById("eleccion").innerHTML = "division"
}


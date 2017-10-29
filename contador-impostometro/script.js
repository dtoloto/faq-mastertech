var contador = '0';

//velocidade da contagem em ms:
var velocidade = 500;

//limite da contagem
var limite = 50;

function conta() {
    if (contador == limite) {
        alert("O contador atingiu o limite de: " + limite);

    } else{
        contador = parseFloat(contador+1);
        setTimeout("conta()", velocidade);
        document.getElementById("valor").innerHTML = contador;
    }
}

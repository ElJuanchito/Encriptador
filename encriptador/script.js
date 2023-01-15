
function codificar(texto) {
    /*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
    */
    let letras = ["e", "i", "a", "o", "u"];
    let clave = ["enter", "imes", "ai", "ober", "ufat"];

    let txt = "" + texto;

    let text = "";

    for (let i = 0; i < txt.length; i++) {

        let ch = txt.charAt(i);

        //let ch = '/' + txt.charAt(i) + '/ig';
        // alert("" + ch)

        for (let j = 0; j < letras.length; j++) {
            if (ch == letras[j]) {
                ch = clave[j];
            }
        }

        text += ch;

    }

    return text;
}

function mostrar() {

    let texto = document.getElementById("elTexto").value;
    let codigo = codificar(texto);
    document.getElementById("Resultado").innerHTML = ("" + codigo);

}

function copy() {
    let texto = document.getElementById("elTexto").value;
    let codigo = codificar(texto);
    navigator.clipboard.writeText(codigo);
}







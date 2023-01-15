
function codificar(texto) {
    let letras = ["e", "i", "a", "o", "u"];
    let clave = ["enter", "imes", "ai", "ober", "ufat"];

    let txt = "" + texto;

    let text = "";

    for (let i = 0; i < txt.length; i++) {

        let ch = txt.charAt(i);

        for (let j = 0; j < letras.length; j++) {
            if (ch == letras[j]) {
                ch = clave[j];
            }
        }

        text += ch;

    }

    return text;
}

function decodificar(texto) {
    let letras = ["e", "i", "a", "o", "u"];
    let clave = ["enter", "imes", "ai", "ober", "ufat"];
    let txt = "" + texto;
    let text = "";

    for (let i = 0; i < txt.length; i++) {

        for (let j = 0; j < letras.length; j++) {

            let re = new RegExp(clave[j]);

            if (re.test(txt)) {

                txt = txt.replace(re, letras[j]);
            }

        }


    }

    text = txt;

    return text;
}

function cambioC() {
    document.getElementById("Resultado").value = "";
    let texto = document.getElementById("elTexto").value;
    let codigo = codificar(texto);
    document.getElementById("Resultado").value = (codigo);

}

function cambioD() {
    document.getElementById("elTexto").value = "";
    let texto = document.getElementById("Resultado").value;
    let codigo = decodificar(texto);
    document.getElementById("elTexto").value = (codigo);
}




let textoDigitado;
let textoApresentar;
let aviso;

const codificar = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "obter",
    "u": "ufat"
};

const decodificar = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "obter": "o",
    "ufat": "u"
};


// Função para codificar o texto
function codificarTexto() {
    textoDigitado = document.getElementById("textoDigitado")
    textoApresentar = document.getElementById("textoApresentar")

    if (!validarTexto(textoDigitado.value)) {
        return
    }

    const novoTexto = textoDigitado.value.replace(/a|e|i|o|u/g,function(ocorrencia){
        return codificar[ocorrencia];
    });

    textoApresentar.value = novoTexto

    document.getElementById("comResultado").style.display = "flex";    
    document.getElementById("semResultado").style.display = "none";   
}

// Função para decodificar o texto
function decodificarTexto(texto) {
    if (!validarTexto(textoDigitado.value)) {
        return
    }
    textoApresentar = document.getElementById("textoApresentar")

    const  novoTexto = textoDigitado.value.replace(/ai|enter|imes|ober|ufat/g,function(ocorrencia){
        return decodificar[ocorrencia];
    });
    textoApresentar.value = novoTexto;
    
    

    document.getElementById("comResultado").style.display = "flex";    
    document.getElementById("semResultado").style.display = "none"; 
}

function validarTexto(texto) {
    aviso = document.getElementById("aviso")
    const regex = /^[a-z0-9\s]*$/

    const validado = regex.test(texto)

    if (!validado) {
        aviso.style.color = "red";
        aviso.style.fontWeight = "bold";
        aviso.scrollIntoView(true);
    } else {
        aviso.style.color = "rgb(87, 87, 87)";
        aviso.style.fontWeight = "normal";
    }

    return validado
}

function copiar() {
    navigator.clipboard.writeText(textoApresentar.value);

    limpar();
    textoDigitado.select();

}

function limpar() {
    textoDigitado.value = "";
    textoApresentar.value = "";

    document.getElementById("comResultado").style.display = "none";    
    document.getElementById("semResultado").style.display = "block"; 
}

const encriptar = document.querySelector('.encriptar');
const texto_a_encriptar = document.querySelector('#texto-encriptar');
const desencriptar = document.querySelector('.desencriptar');
const contenedor = document.querySelector('.contenedor-desencriptado');
let element = document.createElement("p");
let boton_copiar = document.createElement("button");

boton_copiar.classList.add('boton');
boton_copiar.classList.add('copiar');
boton_copiar.textContent = "Copiar";

let llaves_de_encriptar = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat'
}

boton_copiar.addEventListener('click', () => {
    copyToClipboard(element.textContent)
})

encriptar.addEventListener("click", () => {
    limpiar_contenedor();
    element.textContent = encriptar_texto(texto_a_encriptar.value);
    contenedor.appendChild(element)
    contenedor.appendChild(boton_copiar)
})

desencriptar.addEventListener("click", () => {
    limpiar_contenedor();
    element.textContent = desencriptar_texto(texto_a_encriptar.value);
    contenedor.appendChild(element);
    contenedor.appendChild(boton_copiar)
})

function limpiar_contenedor() {
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}

function encriptar_texto(texto) {
    return texto.replace(/a|e|i|o|u/g, function(match) {
        return llaves_de_encriptar[match]; // Reemplazamos la clave con su valor del diccionario
    });
}

function desencriptar_texto(texto) {
    return texto.replace(/ai|enter|imes|ober|ufat/g, function(match) {
        for (let key in llaves_de_encriptar) {
            if (llaves_de_encriptar[key] === match) {
                return key; 
            }
        }
    });
}

const copyToClipboard = async str => {
    try {
      await navigator.clipboard.writeText(str);
      console.log("copied");
    } catch (error) {
      console.log(error);
    }
  };

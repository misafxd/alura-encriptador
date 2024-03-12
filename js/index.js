const encriptar = document.querySelector('.encriptar');
const texto_a_encriptar = document.querySelector('#texto-encriptar');
const desencriptar = document.querySelector('.desencriptar');
const contenedor = document.querySelector('.contenedor-desencriptado');
let element = document.createElement("p");
let boton_copiar = document.createElement("button");

boton_copiar.classList.add('boton');
boton_copiar.classList.add('copiar');
boton_copiar.textContent = "Copiar";

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
    let result = texto.split('').map( char => {
        let character = char.charCodeAt(char.index)
        if (character + 13 > 122) {
            return character - 12
        } else {   
            return character + 13
        }
    });
    
    return result.map( numero => String.fromCharCode(numero)).join('');
}

function desencriptar_texto(texto) {
    let result = texto.split('').map( char => {
        let character = char.charCodeAt(char.index)
        if (character - 13 < 97) {
            if (character == 45)  {
                return 32
            }
            return character + 12
        } else {
            return character - 13
        }
    });
    return result.map( numero => String.fromCharCode(numero)).join('');
}

const copyToClipboard = async str => {
    try {
      await navigator.clipboard.writeText(str);
      console.log("copied");
    } catch (error) {
      console.log(error);
    }
  };

//id de los elementos que quiero manipular
const userInputId = 'user-input';
const userInputReadOnlyId = 'user-input-readonly';
const defaultOutputId = 'default-output';
const resOutputId = 'res-output';
const resOutputTextId = 'res-output-text';
const optionsOriId = 'options-ori';
const optionsResId = 'options-res';
const copyButtonId = 'copy-btn';

//eventos

document.getElementById('encrypt-btn').addEventListener('click', function() {
    //obtenemos el valor del input ingresadp
    let inputText = document.getElementById(userInputId).value;
  
    //encriptamos el texto y lo devolvemos en una variable
    let encryptedText = encriptar(inputText);
    
    //mostramos el resultado en la consola
    console.log('Texto encriptado:', encryptedText);

    //actualizamos el resultado en los text areas
    actualizarResultado(inputText, encryptedText);

    //acomodamos el estado del html ocultando y mostrando elementos
    ocultarDesocultar();
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    //obtenemos el valor del input ingresadp
    let inputText = document.getElementById(userInputId).value;
    
    //desencriptamos el texto y lo devolvemos en una variable
    let decryptedText = desencriptar(inputText);
    
    //mostramos el resultado en la consola
    console.log('Texto desencriptado:', decryptedText);

    //actualizamos el resultado en los text areas
    actualizarResultado(inputText, decryptedText);

    //acomodamos el estado del html ocultando y mostrando elementos
    ocultarDesocultar();
});

document.getElementById('copy-btn').addEventListener('click', function() {
    //obtenemos el texto que se quiere copiar
    let text = document.getElementById(userInputId).value;
 console.log(text);
    //con esta funcion copiamos el texo en el clipboard
    navigator.clipboard.writeText(text).then(function() {

        //una vez copiado vamos a cambiar el texto del boton
        //para mostrar al usuario que algo hizo

        //obtenemos el boton y cambiamos texto y clase css
        var copyButton = document.getElementById(copyButtonId);
        copyButton.textContent  = 'Copiado!';
        copyButton.classList.add('copied');

        //Luego de 2 segundo restauraramos el texto y el estilo del botón
        setTimeout(function() {
            copyButton.textContent  = 'Copiar';
            copyButton.classList.remove('copied');
        }, 2000);

        //informamos en la consola que se copio
        console.log('Texto copiado al portapapeles');
    }).catch(function(err) {
        //si hay un error mostramos un error en la consola
        console.error('No se pudo copiar el texto: ', err);
    });
});

//agregue un boton para reinicar el proceso
document.getElementById('reset-btn').addEventListener('click', function() {
    //obtenemos los elementos y actualizamos el texto a vacio
    document.getElementById(resOutputId).value = '';
    document.getElementById(userInputReadOnlyId).innerHTML = '';
    document.getElementById(userInputId).value = '';

    //actualizamos el estado de los elementos html
    ocultarDesocultar();
});

//validar que solo ingrese minusculas sin acentos. 
const input = document.getElementById(userInputId);
input.addEventListener("input", function () {
    const regex = /^[a-z0-9]+$/;
    if (!regex.test(this.value)) {
      // Si el valor del input no cumple con la expresión regular, muestra un mensaje o limpia el input
      alert("Solo se permiten letras minúsculas sin acento y números.");
      this.value = this.value.replace(/[^a-z0-9]/g, ""); // Elimina caracteres no permitidos
    }
});

//funciones

//actualizamos los text areas con su nuevo valor
function actualizarResultado(oriText, newText){
    document.getElementById(resOutputTextId).value = newText;
    document.getElementById(userInputReadOnlyId).innerHTML = oriText;
}

//cambiamos de estado el elemento agregando o quitando la classe para ocultar
//la applicacion solo tiene dos estados: ingreso text y mostrar resultados.
function toggle(id) {
    let inputElement = document.getElementById(id);
    inputElement.classList.toggle('hidden-elem');
}
function ocultarDesocultar()
{
    toggle(defaultOutputId);
    toggle(resOutputId);
    
    toggle(userInputId);
    toggle(userInputReadOnlyId);

    toggle(optionsOriId);
    toggle(optionsResId);
}

//funcion para eciptar el texto de entrada
//usamos un expresión regular para indicar que queremos reemplazar
//todas las ocurrencias de esa letra o palabra.
function encriptar(text) {
    let encriptado = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encriptado;
}

//funcion para desencriptar el texto de entrada
//usamos un expresión regular para indicar que queremos reemplazar
//todas las ocurrencias de esa letra o palabra.
function desencriptar(text) {
    let desencriptado = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return desencriptado;
}
document.getElementById('encrypt-button').addEventListener('click', function() {
    let inputText = document.querySelector('textarea').value;
    let encryptedText = encriptar(inputText);
    
    console.log('Texto encriptado:', encryptedText);

    actualizarResultado(encryptedText);

    ocultarDesocultar();
});

document.getElementById('decrypt-button').addEventListener('click', function() {
    let inputText = document.querySelector('textarea').value;
    let decryptedText = desencriptar(inputText);
    
    console.log('Texto desencriptado:', decryptedText);

    actualizarResultado(decryptedText);

    ocultarDesocultar();
});

document.getElementById('copiar-button').addEventListener('click', function() {
    let text = document.querySelector(`#txt-resultado`).value;

    navigator.clipboard.writeText(text).then(function() {
        console.log('Texto copiado al portapapeles');
    }).catch(function(err) {
        console.error('No se pudo copiar el texto: ', err);
    });
});


document.getElementById('reset-button').addEventListener('click', function() {
    document.querySelector(`#txt-resultado`).value = '';
    document.querySelector(`#txt-ingreso-readonly`).innerHTML = '';
    document.querySelector(`#txt-ingreso`).value = '';
    ocultarDesocultar();
});

function actualizarResultado(text){
    document.querySelector(`#txt-resultado`).value = text;
    document.querySelector(`#txt-ingreso-readonly`).innerHTML = text;
}

function toggle(id) {
    let inputElement = document.getElementById(id);
    inputElement.classList.toggle('oculto');
}

function ocultarDesocultar()
{
    toggle('inicio');

    toggle('resultado');

    toggle('txt-ingreso');

    toggle('txt-ingreso-readonly');
    
    toggle('options-ori');

    toggle('options-res');
}

function encriptar(text) {
    let encriptado = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encriptado;
}

function desencriptar(text) {
    let desencriptado = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return desencriptado;
}
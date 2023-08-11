const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");


// const btnCopy = document.querySelector(".copiar");
document.querySelector(".copiar").style.display = "none";


//Encriptar mensaje
function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage="none"
    inputTexto.value = ""
    btnCopy.style.display = "block"

}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
          stringEncriptada = stringEncriptada.replace(new RegExp(matrizCodigo[i][0], "g"), matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;


}


//Desencriptar mensaje
function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value = ""
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}


//botón copiar
function copiar() {
    mensaje.select();
    console.log("Texto seleccionado:", mensaje.value);
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            console.log("Texto copiado al portapapeles:", mensaje.value);
            mensaje.value = "";
            alert("Texto Copiado");
        })
        .catch(error => {
            console.error("Error al copiar:", error);
            alert("Hubo un error al intentar copiar el texto al portapapeles.");
        });
}


const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncritado = encriptar(inputTexto.value);
    mensaje.value = textoEncritado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";

}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes([matrizCodigo[i][0]])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncritado = desencriptar(inputTexto.value);
    mensaje.value = textoEncritado;
    inputTexto.value = "";

}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    console.log("Entro1");

    for(let i = 0; i < matrizCodigo.length; i++){
        console.log("Entro2");
        if(stringDesencriptado.includes([matrizCodigo[i][1]])){
            console.log("Entro3");
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    console.log("Entro4");
    return stringDesencriptado;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto copiado");
}
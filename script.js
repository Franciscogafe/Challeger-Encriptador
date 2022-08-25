
const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const TextoEncritado = encriptar(inputTexto.value);
    mensaje.value = TextoEncritado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";

}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes[matrizCodigo[i][0]]){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0]),(matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;


}
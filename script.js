const inputTexto = document.querySelector(".input-texto");
const Mensaje = document.querySelector(".mensaje");

function btnEncritar(){
    const TextoEncritado = encriptar(inputTexto.vale);
    Mensaje.value = TextoEncritado;
    
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; matrizCodigo.length; i++){
        if(stringEncriptado.includes[matrizCodigo[i][0]]){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0]),(matrizCodigo[i][1]);
        }
    }

}
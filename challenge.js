var botonEncriptar = document.querySelector(".btn-encriptar");
var botondesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".contenedor-muneco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".text-resultado");


botonEncriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;



function encriptar(){  
    ocultarImagen();
    resultado.textContent = encriptarTexto(recuperarTexto())

          
}

function desencriptar(){
    ocultarImagen();
    resultado.textContent = desencriptarTexto(recuperarTexto())


}


function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarImagen(){
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");

}


function encriptarTexto(mensaje){
var texto = mensaje;
var textoResultado ="";

for(var x = 0; x < texto.length; x++){
    if(texto[x] == "a"){
        textoResultado = textoResultado + "ai"

    }
    else if(texto[x] == "e"){
        textoResultado = textoResultado + "enter"

    }
    else if(texto[x] == "i"){
        textoResultado = textoResultado + "imes"

    }
    else if(texto[x] == "o"){
        textoResultado = textoResultado + "ober"

    }
    else if(texto[x] == "u"){
        textoResultado = textoResultado + "ufat"

    }
    else{
        textoResultado = textoResultado + texto[x];
    }

}
return textoResultado;

}
function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoResultado ="";
    
    for(var x = 0; x < texto.length; x++){
        if(texto[x] == "a"){
            textoResultado = textoResultado + "a"
            x = x+1;
    
        }
        else if(texto[x] == "e"){
            textoResultado = textoResultado + "e"
            x = x+4;
    
        }
        else if(texto[x] == "i"){
            textoResultado = textoResultado + "i"
            x = x+3;
    
        }
        else if(texto[x] == "o"){
            textoResultado = textoResultado + "o"
            x= x+3;
    
        }
        else if(texto[x] == "u"){
            textoResultado = textoResultado + "u"
            x = x+3;
    
        }
        else{
            textoResultado = textoResultado + texto[x];
        }
    
    }
    return textoResultado;
    
    }
    

  const btn = document.querySelector(".btn-copiar");
  const texto = document.querySelector(".text-resultado");
  
  btn.addEventListener("click", copiaTexto);
  
  function copiaTexto(e){

        navigator.clipboard.writeText(texto.innerHTML);

  }
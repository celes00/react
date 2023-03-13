let estadoLinterna = "apagado";
let sonidoBatman = document.querySelector("#bati_encendido");
let sonidoBoton = document.querySelector("#bati_click");
let batman = document.querySelector("#batman");
let batmanBoton = document.querySelector("#boton")

//evento
batmanBoton.addEventListener("click", ()=>{
    controlarLinterna();
})

function controlarLinterna() {
    if (estadoLinterna == "apagado"){
        estadoLinterna = "encendido";
        sondidoLinterna();
        batman.classList.add("batman_activo");
    }
    else {
        estadoLinterna = "apagado";
        sondidoLinterna();
        batman.classList.remove("batman_activo")
    }
    
}

function sondidoLinterna(){
    if(sonidoBatman.paused){
        sonidoBoton.play();
        sonidoBatman.play();
    }
    else{
        sonidoBoton.play();
        sonidoBatman.pause();
        sonidoBatman.currentTime=0;
    }
}
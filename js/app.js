//declaracion de variables//
let encabezado = document.getElementById("encab")
let nav = document.getElementById("nave")
let main_uni = document.getElementById("maingen")
let sec = document.getElementById("sec-main")
let conferencias = document.getElementById("articulos")
let conferen = document.querySelectorAll(".confe")
let tallerees = document.getElementById("talleres")
let tallee = document.querySelectorAll(".talle")
let formulario = document.getElementById("registro")
let pie_pagina = document.querySelector("piepag")


//mostrar informacion en la consola//
console.log("thor hijo de odin");
console.log("que rollo");
console.log("hola max");

//boton para cambiar descrpcion//
let boton_enca = document. createElement("button");
boton_enca.textContent = "Cambiar informacion";
document.getElementById("encab").appendChild(boton_enca);

//diseño boton//
boton_enca.style.padding = "10px 15px";
boton_enca.style.background = "#001a33";
boton_enca.style.color = "white";
boton_enca.style.border = "2px solid #00bfff";
boton_enca.style.borderRadius = "10px";
boton_enca.style.boxShadow = "0 0 12px #00bfff";
boton_enca.style.cursor = "pointer";


boton_enca.addEventListener("click",function() {
    let des = document.getElementById("descrip");
    des.textContent = "Aprende JavaScript, DOM y desarrollo de aplicaciones web mediante actividades prácticas"

});

//boton altera diseno sec//
let boton_sec = document.createElement("button")
boton_sec.textContent = "cambiar diseño"
document.getElementById("sec-main").appendChild(boton_sec);

boton_sec.style.padding = "10px 15px";
boton_sec.style.background = "#001a33";
boton_sec.style.color = "white";
boton_sec.style.border = "2px solid #00bfff";
boton_sec.style.borderRadius = "10px";
boton_sec.style.boxShadow = "0 0 12px #00bfff";
boton_sec.style.cursor = "pointer";

boton_sec.addEventListener("click",function(){
    sec.style.color = "#00FFFF";
    sec.style.textShadow = "2px 2px 5px black";
    sec.style.fontSize = "22px";
    sec.style.fontFamily = "Arial";
    sec.style.borderRadius = "25px";
    sec.style.boxShadow = "0 0 15px #00bfff";
    sec.style.backgroundImage = "url('Img/images.jpg')";
    sec.style.backgroundSize = "100% 100%";
    sec.style.backgroundRepeat = "no-repeat";
    
});

//boton ocultar/mostrar conferencias//
//acomodo//
let titulo_confe = document.getElementById("confe_ocul")
titulo_confe.style.display = "flex";
titulo_confe.style.flexDirection = "column";
titulo_confe.style.alignItems = "center";

//creacion//
let boton_confe = document.createElement("button")
boton_confe.textContent = "ocultar conferencias"
document.getElementById("confe_ocul").appendChild(boton_confe);

//modificacion del boton//
boton_confe.style.width = "200px";
boton_confe.style.margin = "10px";
boton_confe.style.padding = "10px 15px";
boton_confe.style.background = "#001a33";
boton_confe.style.color = "white";
boton_confe.style.border = "2px solid #00bfff";
boton_confe.style.borderRadius = "10px";
boton_confe.style.boxShadow = "0 0 12px #00bfff";
boton_confe.style.cursor = "pointer";


boton_confe.addEventListener("click",function(){

     //si las conferencias estan ocultas las muestra como estan en css//
    if (conferencias.style.display == "none"){
        conferencias.style.display = "";
        boton_confe.textContent = "ocultar conferencias"

        //si no estan ocultas, las oculta//
    } else {
        conferencias.style.display = "none";
        boton_confe.textContent = "mostrar conferencias"
    }
});
  

//contador de conferencias// 
let contador = document.createElement("p");
contador.textContent = "Conferencias: " + conferen.length;
document.getElementById("confe_ocul").appendChild(contador);
console.log("Conferencias: " + conferen.length); 

//boton agregar conferencia//
let boton_aggconfe = document.createElement("button");
boton_aggconfe.textContent = "Agregar conferencia";
document.getElementById("confe_ocul").appendChild(boton_aggconfe);

boton_aggconfe.style.padding = "10px 15px";
boton_aggconfe.style.background = "#001a33";
boton_aggconfe.style.color = "white";
boton_aggconfe.style.border = "2px solid #00bfff";
boton_aggconfe.style.borderRadius = "10px";
boton_aggconfe.style.boxShadow = "0 0 12px #00bfff";
boton_aggconfe.style.cursor = "pointer";

boton_aggconfe.addEventListener("click",function(){
    let nueva_confe = document.createElement("article");
    nueva_confe.classList.add("confe");
    nueva_confe.style.backgroundImage = "url('Img/mwc25_fira_exterior_3x2.webp')";
    nueva_confe.style.backgroundSize = "cover";
    nueva_confe.style.color = "white";
    nueva_confe.style.textShadow ="2px 2px 4px black";
    nueva_confe.innerHTML = `
        <h1>  MWC Barcelona </a></h1> 
        <p>Horario: 7:00pm </p>
        <p>Ponente: John Stankey </p>
        <p>es el evento de conectividad mas grande e influyente del mundo, organizado por la GSMA. </p>
    `;
    articulos.appendChild(nueva_confe);
    contador.textContent = "Conferencias: " + document.querySelectorAll(".confe").length;
});

//mensaje al enviar el formulario//
let nombre = document.getElementById("fname");
let men_regis = document.getElementById("menReg");
let par = document.getElementById("fparti");

men_regis.style.fontSize = "25px";


//contador de registro del formulario y mensajes de confirmacion o erro//
let con_reg = document.createElement("P");
document.getElementById("registro").appendChild(con_reg);
let registros = 0;

//validacion de datos del formulario//
let ape = document.getElementById("lname");
let corre = document.getElementById("correo");
let tel = document.getElementById("telefono");


formulario.addEventListener("submit", function (event){
    event.preventDefault();
    
    //||=o //
    if(nombre.value == "" || ape.value == "" || corre.value == "" || tel.value == "" || par.value == ""){
        men_regis.textContent = "Por favor, complete todos los campos.";

    }else {
        registros++;

        men_regis.innerHTML = nombre.value + ", tu registro fue correcto, ¡gracias!<br>" + "Tu participacion sera como: " + par.value;

        con_reg.textContent = "Registros realizados: " + registros;
    }
});





        


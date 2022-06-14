//Declarar dos arrays 
var arr_turismo=["Caral","Chiclayo","Puno","nazca"];
var arr_ciudad=["Ciudad Sagrada","Ciudad de la Amistad","Lago más alto del mundo","Lineas de Nazca"];

//Método para cambiar las imagenes del elemento banner
var n=0;

function carrusel(){
	var turismo=document.getElementById("turismo");
	turismo.src="../img/lugares/"+arr_turismo[n]+".png";
	n++;
	if(n>=arr_turismo.length) n=0;

	window.setTimeout("carrusel()",1000)
}

//Metodo para agregar el enlace al nav
function crearenlaces(){
	var arr_texto=["SENATI","El Comercio","Epson","Youtube"];
	var arr_pagina=["www.senati.edu.pe","elcomercio.pe","epson.com.pe","https://www.youtube.com"];

	var barra=document.getElementsByTagName("nav");
	var nuevo=null;

	for(var i = 0; i <arr_texto.length; i++) {

		nuevo=document.createElement("a");
		nuevo.innerHTML=arr_texto[i];
		nuevo.href="http://"+arr_pagina[i];
		nuevo.className="enlace";
		nuevo.target="_blank";

		barra[0].appendChild(nuevo);
	}
}
//metodo para cambiar las imagenes de article
function CrearImagenes() {
	var imagen=document.getElementsByClassName("imagen");
	var texto=document.getElementsByClassName("clase2");

	for (var i = 0; i < arr_turismo.length; i++) {
		imagen[i].src="../img/lugares/"+ arr_turismo[i]+".png";
		imagen[i].style.border=".3px dotted green";

		texto[i].innerText=arr_ciudad[i];
		texto[i].style.color="#ffffff";
		texto[i].style.backgroundColor="#ff0000";
		texto[i].style.fontWeihght="bold";
	}
	
}

//Métodos para ejecucion de los metodos anteriores
window.onload=function(){
	carrusel();
	crearenlaces();
	CrearImagenes();
}
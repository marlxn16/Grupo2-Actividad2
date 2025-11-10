//el numkeys guarda el numero actual ingresado y detecta que tecla o boton se presiono
var numKeys = [];
// captura la referencia del elemento id que es igual al resultado 
var res = document.getElementById("Resultado");

// Funcionalidad de botones numéricos del 0 al 9
for(var i=0; i<=9; i++){
	(function(i){
    	var qs = "num" + i;
		numKeys.push(document.getElementById(qs));
		numKeys[i].addEventListener("click", function(){
			res.textContent += i;
		});
  	}(i));
}

//Aqui se configuran como van a funcionar 
//los botones de operaciones como el +, -, *
var opns = [];
var opnSyms = ["+", "-", "*", "/"];
//funcionalidad de los operadores matematicos
for(var i=0; i<=3; i++){
	(function(i){
    	var qs = "op" + i;
		opns.push(document.getElementById(qs));
		opns[i].addEventListener("click", function(){
			res.textContent += opnSyms[i];
		});
  	}(i));
}

var decPoint = document.getElementById("Punto");

// Funcionalidad del punto decimal, agrega un punto decimal 
// al contenido de la pantalla de resultados==res
decPoint.addEventListener("click", function(){
	res.textContent += ".";
})

var clrBtn = document.getElementById("Limpiar");
var delBtn = document.getElementById("Borrar");
var resultado_final = document.getElementById("Resultado_Final");

//Resetea el estado completo de la interfaz, limpiando la pantalla res.textContent=""
clrBtn.addEventListener("click", function(){
    res.textContent = "";
    resultado_final.innerHTML = "";
});
//Permite correccion manipulando la cadena de texto usando 'substring'
// Elimina el ultimo caracter de la entrada
delBtn.addEventListener("click", function(){
    res.textContent = res.textContent.substring(0, res.textContent.length - 1);
});
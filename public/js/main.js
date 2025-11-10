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

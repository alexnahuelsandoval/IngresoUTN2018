function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	
	while (!(numero  >=1 && numero <=10)){
		numero= prompt("dato incorrecto");
	}
	document.getElementById("Numero").value = numero;
	
	




}//FIN DE LA FUNCIÓN
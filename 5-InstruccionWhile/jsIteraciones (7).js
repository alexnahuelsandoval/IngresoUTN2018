function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='s';
	do
	{
		numero = parseInt(prompt("ingrese un numero: "));
		contador = contador + 1;
		acumulador = acumulador + numero;
		
		respuesta = prompt("desea continuar?: ");
	}
	while( respuesta == "s" )



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
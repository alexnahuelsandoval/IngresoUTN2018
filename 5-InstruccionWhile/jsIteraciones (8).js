function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='s';
	var numero;

	do
	{
		numero = parseInt(prompt("ingrese un numero: "));
		
		if( numero >=0)
		positivo = positivo + numero;
	}
	

	
	     



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
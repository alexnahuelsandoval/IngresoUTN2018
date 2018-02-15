function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero = Math.floor(Math.random()*10)+1
	if ( numero >=9 && numero <=10){
		alert("exelente");
	}
	else if ( numero >=4){
		alert("aprobado");
	}
	else{
		alert("Vamos, la proxima se puede");
	}




}//FIN DE LA FUNCIÓN
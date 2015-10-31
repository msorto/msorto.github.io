function censurar(){

	var palabras = ["primo","hijo","papa","enojo"]
	var comentarioUsuario = document.getElementById("valor1").value

	var resultado = comentarioUsuario;
	for (var i=0;i<palabras.length;i++){
		 resultado = resultado
		 .replace(new RegExp(palabras[i],"gi"),"*****");
		}
		document.getElementById("resultado").value = resultado;
}


function alertar(){

	for (var i=0; i<4;i=i+1){
	alert("Mi Alerta " + i);	
	}
	
}


function operar (operador) {
	val1 = document.getElementById("valor1").value;	
    val2 = document.getElementById("valor2").value;	
	
	if(operador=="+"){
		result=Number(val1)+Number(val2);
		document.getElementById("resultado").value = result;
	}else if (operador=="-"){
	result=Number(val1)-Number(val2);
		document.getElementById("resultado").value = result;
	
	}else if (operador=="*"){
	result=Number(val1)*Number(val2);
		document.getElementById("resultado").value = result;
	
	}else if (operador=="/"){
		result=Number(val1)/Number(val2);
		document.getElementById("resultado").value = result;
		}

	}

	}

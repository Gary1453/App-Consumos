


$(document).on('ready',function(){


	
	var urlSearch = window.location.search;
	var mesid = urlSearch.substring( 21 , urlSearch.length );
	var familia = urlSearch.substring( 9 , urlSearch.indexOf('&') );

	var url = "http://localhost/App Consumos/logica.php?opcion=5&";
	url = url + "mesid=" + mesid + "&familia=" + familia + "&callback=?";
	
	var inicio = $.getJSON( url , cargarLista );  

});


//Metodos de apoyo 

function cargarLista(presultado){

console.log(typeof(presultado));
var lista="";

	for( var i=0 ; presultado.length ; i++ )
	{
	 
	 lista+="<tr>";
	 lista+="<td>" + presultado[i].MESID + "</td>";
	 lista+="<td>" + presultado[i].FECHA + "</td>";
	 lista+="<td>" + presultado[i].TIPO + "</td>";
	 lista+="<td>" + presultado[i].FAMILIA + "</td>";
	 lista+="<td>" + presultado[i].SUBFAMILIA + "</td>";
	 lista+="<td>" + presultado[i].PRODUCTO + "</td>";
	 lista+="<td>" + presultado[i].IMPORTESOLES + "</td>";
	 lista+="</tr>";


	 $("#gastodId").html(lista);


	}







}
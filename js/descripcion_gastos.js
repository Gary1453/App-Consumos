


$(document).on('ready',function(){

	
	var urlSearch = window.location.search;
	var mesid = urlSearch.substring( urlSearch.indexOf('&') + 7 , urlSearch.lastIndexOf('&') );
	var tipo = urlSearch.substring( urlSearch.lastIndexOf('=') + 1 , urlSearch.length );
	var familia = urlSearch.substring( urlSearch.indexOf('=') + 1  , urlSearch.indexOf('&') );

	var url = "http://localhost/App Consumos/logica.php";


	if(tipo=="CARGOS")
	{

	url = url + "?opcion=5&" + "mesid=" + mesid + "&familia=" + familia + "&callback=?";

	}
	else if( tipo == "ABONOS")
	{

	url = url + "?opcion=7&" + "mesid=" + mesid + "&familia=" + familia + "&callback=?";

	}
	else if( tipo == "ABONOS_PLANILLA")
	{

	url = url + "?opcion=9&" + "mesid=" + mesid + "&familia=" + familia + "&callback=?";		

	}

	var inicio = $.getJSON( url , cargarLista );  

});


//Metodos de apoyo 

function cargarLista(presultado){

console.log(typeof(presultado));
var urlSearch = window.location.search;
var tipo = urlSearch.substring( urlSearch.lastIndexOf('=') + 1 , urlSearch.length );
var lista="";

	for( var i=0 ; presultado.length ; i++ )
	{
	 
	 if( tipo == "CARGOS")
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
	 }
	 else if ( tipo == "ABONOS")
	 {

	 lista+="<tr>";
	 lista+="<td>" + presultado[i].MESID + "</td>";
	 lista+="<td>" + presultado[i].FECHA + "</td>";
	 lista+="<td>" + presultado[i].TIPO + "</td>";
	 lista+="<td>" + presultado[i].DESCRIPCION + "</td>";
	 lista+="<td>" + presultado[i].PRODUCTO + "</td>";
	 lista+="<td>" + presultado[i].CANAL + "</td>";
	 lista+="<td>" + presultado[i].IMPORTESOLES + "</td>";
	 lista+="</tr>";

	 } 

	 else if ( tipo == "ABONOS_PLANILLA")
	 {

	 lista+="<tr>";
	 lista+="<td>" + presultado[i].MESID + "</td>";
	 lista+="<td>" + presultado[i].FECHA + "</td>";
	 lista+="<td>" + presultado[i].TIPO + "</td>";
	 lista+="<td>" + presultado[i].DESCRIPCION + "</td>";
	 lista+="<td>" + presultado[i].PRODUCTO + "</td>";
	 lista+="<td>" + presultado[i].CANAL + "</td>";
	 lista+="<td>" + presultado[i].IMPORTESOLES + "</td>";
	 lista+="</tr>";

	 } 

	 console.log(lista);
	 $("#gastodId").html(lista);


	}

}
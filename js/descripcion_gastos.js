
// Variables locales 

	var urlSearch = window.location.search;
	var mesid = urlSearch.substring( urlSearch.indexOf('&') + 7 , urlSearch.lastIndexOf('&') );
	var tipo = urlSearch.substring( urlSearch.lastIndexOf('=') + 1 , urlSearch.length );
	var familia = urlSearch.substring( urlSearch.indexOf('=') + 1  , urlSearch.indexOf('&') );
	var url = "http://localhost/App Consumos/logica.php";


$(document).on('ready',function(){

	var opcion ={"CARGOS" : 5  , "ABONOS": 7 , "ABONOS_PLANILLA": 9 };
	url = url + "?opcion=" + opcion[tipo] + "&mesid=" + mesid + "&familia=" + familia + "&callback=?";

	var inicio = $.getJSON( url , cargarLista );  

});


//Metodos de apoyo 

function cargarLista(presultado){

var lista="";

	for( var i=0 ; presultado.length ; i++ )
	{
	 
	 lista+="<tr>";
	 
	 if(tipo != "CARGOS" )
	 {
	 
	 lista+="<td>" + presultado[i].CLIENTEID + "</td>";

	 }

	 lista+="<td>" + presultado[i].MESID + "</td>";
	 lista+="<td>" + presultado[i].FECHA + "</td>";

	 if( tipo == "CARGOS")
	 {

	 lista+="<td>" + presultado[i].FAMILIA + "</td>";
	 lista+="<td>" + presultado[i].SUBFAMILIA + "</td>";

	 }

	 else
	 {

	 lista+="<td>" + presultado[i].DESCRIPCION + "</td>";

	 } 

	 lista+="<td>" + presultado[i].PRODUCTO + "</td>";
	 lista+="<td>" + presultado[i].CANAL + "</td>";
	 lista+="<td>" + presultado[i].IMPORTESOLES + "</td>";
	 lista+="</tr>";

	 console.log(lista);
	 $("#gastodId").html(lista);


	}

}
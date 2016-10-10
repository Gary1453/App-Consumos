
// Variables globales

var urlSearch = window.location.search;
var tipo = urlSearch.substring( urlSearch.indexOf('=') +1 , urlSearch.indexOf('&') );
var familia = urlSearch.substring( urlSearch.lastIndexOf( '=' ) + 1 , urlSearch.length );	
var url = "http://localhost/App Consumos/logica.php";

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback( function(){
    
    var arreglo = cargarArreglo();	

	setTimeout( function()
	{

	drawChart(arreglo);

	}, 1000); 

	cargarGastos();

});


function drawChart(arreglo) {

var data = google.visualization.arrayToDataTable(arreglo);

var options = 
{

width: 500,
height: 300, 
title: 'Mis Consumos Mensuales'

};

var chart = new google.visualization.ColumnChart(document.getElementById('columnbar'));

	function selectHandler() 
	{

	  var selectedItem = chart.getSelection()[0];


		if (selectedItem) 

		{
			var mesid = data.getValue(selectedItem.row, 0);
			var url = "http://localhost/App Consumos/descripcion_gastos.php";		 	
		 	window.location.href= url + "?familia=" + familia + "&mesid=" + mesid + "&tipo=" + tipo;
			

		}

	}
	

google.visualization.events.addListener(chart, 'select', selectHandler);
chart.draw(data, options);

}



function cargarGastos()

{
	
	var opcion ={"CARGOS" : 5  , "ABONOS": 7 , "ABONOS_PLANILLA": 9 };
	url = url + "?opcion=" + opcion[tipo] + "&familia=" + familia + "&mesid=" + "201606" + "&callback=?";
	var inicio = $.getJSON( url , cargGasUltMes);


}


// El siguiente metodo nos permite obtener un arreglo de los consumos de un cliente dado

function cargarArreglo()

{

	var opcion ={"CARGOS" : 3  , "ABONOS": 6 , "ABONOS_PLANILLA": 8 };
	var url1 = url + "?opcion=" +  opcion[tipo] + "&familia=" + familia + "&callback=?";
    var arreglo = [ [ "MesId" , "ImporteSoles" ] ];
    
    var prueba = $.getJSON( url1, function(presultado)
    {                
    	
		for(i=0 ; i< presultado.length ; i++)
		{
 			
 			arreglo.push( [ presultado[i].MESID , parseInt( presultado[i].IMPORTE )  ] );

		}			

    });
			  
return arreglo;		

}


//Este metodo lista los consumos del ultimo mes 

function cargGasUltMes(presultado)
{
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

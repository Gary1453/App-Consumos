

google.charts.load('current', {'packages':['corechart']});
//google.charts.setOnLoadCallback( drawChart );
google.charts.setOnLoadCallback( function(){
    
    var arreglo = cargarArreglo();
	

	var urlSearch = window.location.search;
	var tipo = urlSearch.substring( urlSearch.indexOf('=') +1 , urlSearch.indexOf('&') );
	var familia = urlSearch.substring( urlSearch.lastIndexOf( '=' ) + 1 , urlSearch.length );	
	
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
			var urlSearch = window.location.search;
			var tipo = urlSearch.substring( urlSearch.indexOf('=') +1 , urlSearch.indexOf('&') );
			var familia = urlSearch.substring( urlSearch.lastIndexOf( '=' ) + 1 , urlSearch.length );	
			var mesid = data.getValue(selectedItem.row, 0);
			var url = "http://localhost/App Consumos/descripcion_gastos.html";
		 	
			if( tipo == 'CARGOS')
			{
				window.location.href= url + "?familia=" + familia + "&mesid=" + mesid + "&tipo=" + tipo;

			}
			else if (tipo == 'ABONOS')
			{

				window.location.href= url + "?familia=" + familia + "&mesid=" + mesid + "&tipo=" + tipo;
			}
			else if ( tipo = 'ABONOS_PLANILLA')
			{

				window.location.href= url + "?familia=" + familia + "&mesid=" + mesid + "&tipo=" + tipo;
			}

		}

	}
	

google.visualization.events.addListener(chart, 'select', selectHandler);
chart.draw(data, options);

}



function cargarGastos()

{

var urlSearch = window.location.search;
var tipo = urlSearch.substring( urlSearch.indexOf('=') +1 , urlSearch.indexOf('&') );
var familia = urlSearch.substring( urlSearch.lastIndexOf( '=' ) + 1 , urlSearch.length );		
var url = "http://localhost/App Consumos/logica.php";

	if( tipo == 'CARGOS')
	{
	  url = url + "?opcion=" + 5 + "&familia=" + familia + "&mesid=" + "201606" + "&callback=?";

	}
	else if (tipo == 'ABONOS')
	{

	  url = url + "?opcion=" + 7  + "&mesid=" + "201606" + "&callback=?";
	}
	else if ( tipo = 'ABONOS_PLANILLA')
	{

 	  url = url + "?opcion=" + 9  + "&mesid=" + "201606" + "&callback=?";
	}


var inicio = $.getJSON( url , cargGasUltMes);


}


// El siguiente metodo nos permite obtener un arreglo de los consumos de un cliente dado

function cargarArreglo()

{

	var urlSearch = window.location.search;
	var tipo = urlSearch.substring( urlSearch.indexOf('=') +1 , urlSearch.indexOf('&') );
	var familia = urlSearch.substring( urlSearch.lastIndexOf( '=' ) + 1 , urlSearch.length );	
	var url1="http://localhost/App Consumos/logica.php";
	

	if( tipo == 'CARGOS')
	{
		url1 = url1 + "?opcion=" +  3 + "&familia=" + familia + "&callback=?";

	}
	else if (tipo == 'ABONOS')
	{

		url1 = url1 + "?opcion=" +  6 + "&callback=?";
	}
	else if ( tipo = 'ABONOS_PLANILLA')
	{

		url1 = url1 + "?opcion=" +  8 + "&callback=?";
	}

    
       

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
	console.log('funciona');
	var urlSearch = window.location.search;
	var tipo = urlSearch.substring( urlSearch.indexOf('=') +1 , urlSearch.indexOf('&') );
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

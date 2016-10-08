
google.charts.load('current', {'packages':['corechart']});
//google.charts.setOnLoadCallback( drawChart );
google.charts.setOnLoadCallback( function(){


    
    var arreglo = cargarArreglo();

	//console.log(arreglo);
	
	setTimeout( function()
	{

		drawChart(arreglo);

	},15000); 

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
		var familia = urlSearch.substring( urlSearch.indexOf('=') +1 , urlSearch.length );	
		var mesid = data.getValue(selectedItem.row, 0);

	 	window.location.href="http://localhost/App Consumos/descripcion_gastos.html?familia=" + 
	 						  familia + "&mesid=" + mesid;

		}

	}
	

google.visualization.events.addListener(chart, 'select', selectHandler);
chart.draw(data, options);

}



function cargarGastos()

{

var urlSearch = window.location.search;
var familia = urlSearch.substring( urlSearch.indexOf('=') +1 , urlSearch.length );	
var url = "http://localhost/App Consumos/logica.php?opcion=4&";
url = url + "&familia=" + familia + "&callback=?";

var inicio = $.getJSON( url , cargGasUltMes);


}


// El siguiente metodo nos permite obtener un arreglo de los consumos de un cliente dado

function cargarArreglo()

{

	var urlSearch=window.location.search;
	var familia = urlSearch.substring( urlSearch.indexOf('=') +1 , urlSearch.length );
    var url1="http://localhost/App Consumos/logica.php";
    url1 = url1 + "?opcion=3&familia=" + familia + "&callback=?";   

    //console.log(url);    

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

	 console.log(lista);
	 $("#gastodId").html(lista);


	}

}





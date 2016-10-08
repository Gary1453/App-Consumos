
		
		google.charts.load('current', {'packages':['corechart']});
		//google.charts.setOnLoadCallback( drawChart );
		google.charts.setOnLoadCallback( function(){

				

			var arreglo = cargarArreglo();
			console.log(arreglo);
			
			setTimeout(function(){

				drawChart(arreglo);

			},15000);

			

		});


function drawChart(arreglo) 
{

/*var arreglo = [	['Familia', 'ImporteSoles'],['OTROS', 10],	
['Eat',2],['Commute',2],['Watch TV', 2],['Sleep',    7] ];*/
//var arreglo = cargarArreglo(arreglo);
//console.log(arreglo);


var data = google.visualization.arrayToDataTable(arreglo);

var options = 
{

width: 500,
height: 300, 
title: 'Mis Consumos Diarios',
is3D: true

};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));

function selectHandler() 
{

	var selectedItem = chart.getSelection()[0];

	if (selectedItem) 
	{
		var familia = data.getValue(selectedItem.row, 0);
		//alert('The user selected ' + topping);
		window.location.href="http://localhost/App Consumos/gastos_mensuales.html?familia="+familia;

	}

}

google.visualization.events.addListener(chart, 'select', selectHandler);
chart.draw(data, options);

}


	// El siguiente metodo nos permite obtener un arreglo de los consumos de un cliente dado

		function cargarArreglo()

		{

	        var url="http://localhost/App Consumos/logica.php";
	        url = url + "?opcion=1&callback=?";       

	        var arreglo = [  

				['Familia', 'ImporteSoles'],
				['OTROS',0], ['ENTRETENIMIENTO',0], ['TIENDA POR DEPARTAMENTOS',0], 
				['RESTAURANTES',0], ['PAGOS VARIOS',0],['EDUCACION',0],
				['ESTACIONES DE SERVICIO',0],['SALUD',0],['SERVICIOS ESPECIALIZADOS',0],
				['SUPERMERCADOS',0] ,['TRANSPORTE',0] 
				  		  ];	

	        
	        var prueba = $.getJSON( url, function(presultado)
	        {                

				for(i=0 ; i< presultado.length ; i++)
				{
		 		
				 		arreglo.find(function(variable)
				 		{

					 			if( variable[0] == presultado[i].FAMILIA )
					 			{

					 				variable[1] = parseInt( presultado[i].IMPORTE );
					 			}

				 		});

				}			

	        });
					  
		return arreglo;				  

    	}
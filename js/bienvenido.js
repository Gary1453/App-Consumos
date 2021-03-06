
		
		google.charts.load('current', {'packages':['corechart']});
		google.charts.load('current', {'packages':['bar']});

		google.charts.setOnLoadCallback( function(){


			var url="http://localhost/App Consumos/logica.php";

			//Cargamos el grafico Pie
			var url_pie = url +  "?opcion=1&callback=?";
			var arreglo_pie = cargarArreglo( 'pie' , url_pie );
			var options_pie = 
			{

			width: 500,
			height: 300, 
			title: 'Mis Consumos Diarios',
			is3D: true

			};

			//Cargamos el grafico Bar
			var url_bar = url + "?opcion=2&callback=?"; 
			var arreglo_bar = cargarArreglo( 'bar' , url_bar );
			var options_bar = 
			{
				width:500,
				height:300,
				chart: 
				{
				title: 'Cargos y Abonos',
				subtitle: 'Ultimo mes en vigencia',
				
				}

			};			
			
			setTimeout(function()
			{

				drawChart( arreglo_pie , 'piechart' , options_pie , 'pie' );
				drawChart( arreglo_bar ,'columnchart_material', options_bar , 'bar' );


			},2000);

			

		});

/* 	 
	 
	 Esta funcion nos permite dibujar nuestro grafico 
	 Se requiere del arreglo de  elementos a mostrar , el id del Div donde se mostrara, 
	 las opciones del grafico  y el tipo de grafico a mostrar

*/

function drawChart( arreglo , elementoId , options , tipo )  
{

 var data = google.visualization.arrayToDataTable(arreglo);

//Definimos el elemento a cargar 

if ( tipo == 'pie' )
{

 var chart = new google.visualization.PieChart(document.getElementById( elementoId ));

}

else if ( tipo == 'bar' )
{

 var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

}

//Agregamos Respuestas a eventos 

if( tipo == 'pie' )

{
	function selectHandler() 
	{

		var selectedItem = chart.getSelection()[0];

		if (selectedItem) 
		{
			var familia = data.getValue(selectedItem.row, 0);
			window.location.href="http://localhost/App Consumos/gastos_mensuales.php?"
								  + "tipo=CARGOS" + "&familia=" + familia;

		}

	}

google.visualization.events.addListener(chart, 'select', selectHandler);

}

//Dibujamos el grafico

chart.draw(data, options);

}

// El siguiente metodo nos permite obtener un arreglo de los consumos de un cliente dado

function cargarArreglo( tipo , url )
{
	if( tipo == 'pie' )
	{    	    
	    var arreglo=[ ['Familia', 'Importe'] ];
	}

	else if ( tipo == 'bar')
	{	 	
	    var arreglo=[ ['MesId', 'Cargos' , 'Abonos' ] ];
	}
						  		  	
    
    var prueba = $.getJSON( url, function(presultado)
    {                

	console.log(presultado);

	for(i=0 ; i< presultado.length ; i++)
	{

		if( tipo == 'pie')
		 	{
			 arreglo.push( [ presultado[i].FAMILIA , parseInt( presultado[i].IMPORTE )  ] );
			}

			else if ( tipo == 'bar')
			{
			arreglo.push( [ presultado[i].MESID , parseInt( presultado[i].CARGOS ) , parseInt( presultado[i].ABONOS )  ] );
			}
	
	}			

    });
			  
return arreglo;				  

}
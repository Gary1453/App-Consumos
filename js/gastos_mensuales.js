

		google.charts.load('current', {'packages':['corechart']});
		//google.charts.setOnLoadCallback( drawChart );
		google.charts.setOnLoadCallback( function(){


			var arreglo = cargarArreglo();
			console.log(arreglo);
			
			setTimeout(function(){

				drawChart(arreglo);

			},15000); 

			

		});


		function drawChart(arreglo) {

		/*var arreglo = [	['Familia', 'ImporteSoles'],['OTROS', 10],	
		['Eat',2],['Commute',2],['Watch TV', 2],['Sleep',    7] ];*/
		//var arreglo = cargarArreglo(arreglo);
		//console.log(arreglo);


		var data = google.visualization.arrayToDataTable(arreglo);

		var options = {
		title: 'Mis Consumos Mensuales'
		};

		var chart = new google.visualization.ColumnChart(document.getElementById('columnbar'));

		function selectHandler() {

		var selectedItem = chart.getSelection()[0];

		
			if (selectedItem) {

			var urlSearch=window.location.search;
			var familia = urlSearch.substring( urlSearch.indexOf('=') +1 , urlSearch.length );	
			var mesid = data.getValue(selectedItem.row, 0);
			
			alert('The user selected ' + familia);
			alert('The user selected ' + mesid);

		window.location.href="http://localhost/App Consumos/descripcion_gastos.html?familia="+familia + "					  	&mesid=" + mesid;
	
			}

		}

        google.visualization.events.addListener(chart, 'select', selectHandler);
		chart.draw(data, options);





		}


	// El siguiente metodo nos permite obtener un arreglo de los consumos de un cliente dado

		function cargarArreglo()

		{

			var urlSearch=window.location.search;
			var familia = urlSearch.substring( urlSearch.indexOf('=') +1 , urlSearch.length );
	        var url="http://localhost/App Consumos/logica.php";
	        url = url + "?opcion=3&familia=" + familia + "&callback=?";   

	        //console.log(url);    

	        var arreglo = [ [ "MesId" , "ImporteSoles" ] ];
	        
	        var prueba = $.getJSON( url, function(presultado)
	        {                
	        	
				for(i=0 ; i< presultado.length ; i++)
				{
		 			
		 				arreglo.push( [ presultado[i].MESID , parseInt( presultado[i].IMPORTE )  ] );

				}			

	        });
					  
		return arreglo;				  

    	}
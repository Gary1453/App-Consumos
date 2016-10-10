
<!DOCTYPE html>

<html>

	<head>

	        
	        <meta charset=”utf8”>
	        <title> Login Bank </title>

	</head>


	<body>


		<header></header>


			<h1 align="center">Hola mundo</h1>

			<table border="1" style="width:800px" align="center">

				<thead>

		        <tr>

		            <?php 

		                $tipo=$_GET['tipo'];

		                if($tipo != "CARGOS")
		                {
		                    echo "<th> Clienteid </th>";
		                }

		            ?>

		            <th> MesId </th>
		            <th> Fecha </th>

		            <?php 

		                $tipo=$_GET['tipo'];

		                if($tipo == "CARGOS")
		                {
		                    echo "<th> Familia </th>";
		                    echo "<th> SubFamilia </th>";
		                }

		                else
		                {
		                    echo "<th> Descripcion </th>";

		                }    

		            ?>                    
		            
		            <th> Producto </th>
		            <th> Canal </th>
		            <th> ImporteSoles </th>

		        </tr>

				</thead>

				<tbody id="gastodId" ></tbody>
				<tfoot></tfoot>

			</table>


			<footer></footer>

		  
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>   
		<script type="text/javascript" src="js/descripcion_gastos.js" ></script>

	</body>


</html>
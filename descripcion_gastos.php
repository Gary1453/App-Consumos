
<!DOCTYPE html>

<html>

	<head>

	        
    <meta charset=”utf8”>
    <title> Login Bank </title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >

	</head>


	<body>
	<div class="container-fluid">

<article>

		<header></header>


			<h2 align="center"> Detalle de gastos </h2>

			<table border="1" style="width:800px" align="center" class="table table-striped" >

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

</article>

			<footer>
				
				<div align="right" style="padding-top:100px;padding-right: 200px;" >
 				
	 				<button class="btn btn-default" type="button" align="center"  id="regresarId" 
	 						name="regresar" > Regresar 
	 				</button>

 				</div>

			</footer>

		  
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>   
		<script type="text/javascript" src="js/descripcion_gastos.js" ></script>

	</div>
	</body>


</html>
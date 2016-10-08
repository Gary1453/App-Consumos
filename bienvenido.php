
<?php

session_start();
//$_SESSION['nombre']="gary";
//$nombre=$_SESSION['nombre'];


?>

<!DOCTYPE html>

<html>

<head>

        
	<meta charset=”utf8”>
	<title> Login Bank </title>
	
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>


</head>


<body>


        <header>


        </header>

		<h1 align="center">

			<?php

			$nombre=$_SESSION['nombre'];
			 echo 'Bienvenido'. ' ' . $nombre;

			?>

		</h1>

		<div id="piechart" align="center" style="width: 900px; height: 500px;" ></div>
		<div id="columnchart_material" style="width: 900px; height: 500px;"></div>


        <footer>

        
        </footer>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>   
<script type="text/javascript" src="js/bienvenido.js"></script>


</body>


</html>

<?php

session_start();

?>

<!DOCTYPE html>

<html>

<head>

        
	<meta charset=”utf8”>
	<title> Login Bank </title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>



</head>


<body>

<div class="container-fluid" >

<header align="center">


<nav class="navbar navbar-default" role="navigation" >

  <div class="navbar-header">

    <button type="button" class="navbar-toggle" data-toggle="collapse"
            data-target=".navbar-ex1-collapse">

      <span class="sr-only">Desplegar navegación</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>

    </button>

    <a class="navbar-brand" href="#">Login Bank</a>

  </div>
 
  <div class="collapse navbar-collapse navbar-ex1-collapse">
    
    <ul class="nav navbar-nav">

      <li class="active">

     	 <a href="http://localhost:/Web Consumos/gastos_mensuales.php?tipo=ABONOS&familia=" > 
        
         Abonos
        
         </a> 

      </li>
      
      <li>
      
      	<a href="http://localhost:/Web Consumos/gastos_mensuales.php?tipo=ABONOS_PLANILLA&familia=" > 
        
        Abonos Planilla
        
        </a> 

      </li>

      <li>  <a href="#" > Productos </a> </li>  

      <li> 

        <a href="http://localhost:/Web Consumos/logica.php?opcion=10" > Logout </a> 

      </li>

      
  
    </ul>

  </div>

</nav>

</header>

	<h1 align="center">

		<?php

		$nombre=$_SESSION['nombre'];
		 echo 'Bienvenido'. ' ' . $nombre;

		?>

	</h1>

	<div id="piechart" align="center"  ></div>
	<div id="columnchart_material" align="center" ></div>


	<footer>


	</footer>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>   
<script type="text/javascript" src="js/bienvenido.js"></script>

</div>
</body>


</html>
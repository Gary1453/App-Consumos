
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

    <header>


    </header>

    
    <div>
    
        <h2 align="center" >  Distribucion de los ultimos 6 meses  </h2>
        <div id="columnbar" align="center"></div>

    </div>

<article>


<h2 align="center" >  Gastos del Ultimo Mes </h2>

    <table border="1" style="width:500px" align="center" class="table table-striped">

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
        
        <div align="right" style="padding-top:100px;padding-right: 200px;">

            <button class="btn btn-default" type="button" align="right"  id="regresarId" 
            name="regresar" > Regresar 
            </button>

        </div>
    

    </footer>

  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>   
  <script type="text/javascript" src="js/gastos_mensuales.js" ></script>

</div>
</body>


</html>
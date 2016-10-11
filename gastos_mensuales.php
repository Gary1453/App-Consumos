
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


    <div id="columnbar" align="center" style="width: 700px; height: 350px;" ></div>

<article>

    <table border="1" style="width:500px" align="center">

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
        
    <button type="button" align="center"  id="regresarId" name="regresar" > Regresar </button>

    </footer>

  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>   
  <script type="text/javascript" src="js/gastos_mensuales.js" ></script>

</body>


</html>
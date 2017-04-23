<?php

header("Access-Control-Allow-Origin:http://localhost:8100");
header("Content-Type: application/x-www-form-urlencoded");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	
    $data = file_get_contents("php://input");
    $objData = json_decode($data);
	

	
    $nombre = $objData->nombre;
    $email = $objData->email;
    $pass = $objData->pass;

    $nombre = stripslashes($nombre);
    $email = stripslashes($email);
    $pass = stripslashes($pass);
    $nombre = trim($nombre);
    $email = trim($email);
    $pass = trim($pass);
	
    $datos; 

    @$db = new PDO("mysql:host=sql10.freesqldatabase.com;dbname=sql10170424", "sql10170424", "fF8wVCvaED");

    if($db){
        $sql = " insert into usuarios values(NULL,'".$nombre."','".$email."','".$pass."')";
        $query = $db->prepare($sql);
        $query ->execute();
        if(!$query){
                   $datos = array('mensage' => "no fue posible insertar datos");
                   echo json_encode($datos);
         }
        else{
                   $datos = array('mensage' => "Datos ingresados correctamente");
                  echo json_encode($datos);
         };
    }
   else{
          $datos = array('mensage' => "No es posible insertar datos.");
          echo json_encode($datos);
    };
	?>
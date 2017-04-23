<?php
//ESTA API ESTÁ UTILIZANDO O BENCO DE DADOS AULA COM A TABELA
//USUÁRIOS E UTILIZA ENVIO E RETORNO EM OBJETOS
header("Access-Control-Allow-Origin:http://localhost:8100");
//header('Access-Control-Allow-Methods:PUT');
header("Content-Type: application/x-www-form-urlencoded");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    //RECUPERAÇÃO DO FORMULÁRIO
    $data = file_get_contents("php://input");
    $objData = json_decode($data);
    // TRANSFORMA OS DADOS
    $id = $objData->id;
    $nombre = $objData->nombre;
    $email = $objData->email;
    
    // LIMPA OS DADOS
    $nombre = stripslashes($nombre);
    $email = stripslashes($email);
    $id = trim($id);
    $nombre = trim($nombre);
    $email = trim($email);
    $dados; // RECEBE ARRAY PARA RETORNO
    // INSERE OS DADOS
    @$db = new PDO("mysql:host=sql10.freesqldatabase.com;dbname=sql10170424", "sql10170424", "fF8wVCvaED");
   //VERIFICA SE TEM CONEXÃO
    if($db){
        $sql = " UPDATE usuarios SET nombre='".$nombre."',email='".$email."' WHERE id =".$id;
        $query = $db->prepare($sql);
        $query ->execute();
        if(!$query){
                   $dados = array('mensage' => "No fue posible modificar los datos");
                   echo json_encode($dados);
         }
        else{
                   $dados = array('mensage' => "Datos modificados correctamente");
                  echo json_encode($dados);
         };
    }
   else{
          $dados = array('mensage' => "No fue posible modificar los datos , intente mas tarde");
          echo json_encode($dados);
    };
	
	?>
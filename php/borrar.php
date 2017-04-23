<?php
//ESTA API ESTÁ UTILIZANDO O BENCO DE DADOS AULA COM A TABELA
//USUÁRIOS E UTILIZA ENVIO E RETORNO EM OBJETOS
header("Access-Control-Allow-Origin:http://localhost:8100");
header("Content-Type: application/x-www-form-urlencoded");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$banco = "mysql:host=sql10.freesqldatabase.com;dbname=sql10170424";
$user = "sql10170424";
$pass = "fF8wVCvaED";
    //RECUPERAÇÃO DO FORMULÁRIO
    $data = file_get_contents("php://input");
    $id = json_decode($data);
    // TRANSFORMA OS DADOS
    $id = trim($id);
    $dados; // RECEBE ARRAY PARA RETORNO
    // INSERE OS DADOS
    @$db = new PDO($banco,$user,$pass);
   //VERIFICA SE TEM CONEXÃO
    if($db){
        $sql = "DELETE FROM usuarios WHERE id=".$id;
        $query = $db->prepare($sql);
        $query ->execute();
        if(!$query){
                   $dados = array('mensage' => "no fue posible borrar este dato");
                   echo json_encode($dados);
         }
        else{
                   $dados = array('mensage' => "Datos borrados correctamente");
                  echo json_encode($dados);
         };
    }
   else{
          $dados = array('mensage' => "No fue posible borrar los datos , intente mas tarde.");
          echo json_encode($dados);
    };
	
	?>
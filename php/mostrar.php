<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
$dns = "mysql:host=sql10.freesqldatabase.com;dbname=sql10170424";
$user = "sql10170424";
$pass = "fF8wVCvaED";
try {
	$con = new PDO($dns, $user, $pass);
	if(!$con){
		echo "no es posible conectar con los datos";
	}		
	$query = $con->prepare('SELECT * FROM usuarios');
		$query->execute();
		$out = "[";
		while($result = $query->fetch()){
			if ($out != "[") {
				$out .= ",";
			}
			$out .= '{"id": "'.$result["id"].'",';
			$out .= '"nombre": "'.$result["nombre"].'",';
			$out .= '"email": "'.$result["email"].'",';
			$out .= '"pass": "'.$result["pass"].'"}';
		}
		$out .= "]";
		echo $out;
} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};
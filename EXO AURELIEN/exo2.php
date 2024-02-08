<?php
 require_once("connexion.php")
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php

$sql= "SELECT * FROM `pays` ORDER BY `pays`.`id` ASC"; 
$temp= $pdo->query($sql);

while ($resultat = $temp->fetch()){ // "Tant que le résultat est traité"
    echo '<ol>
    <li>'.$resultat['nom'].'</li>
    </ol>';
}




    ?>
</body>
</html>
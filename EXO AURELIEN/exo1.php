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

$sql= "SELECT * FROM `pays`"; 
$temp= $pdo->query($sql);
echo '<table border=1">
<tr>
<td>ID</td>
<td>Pays</td>
</tr>';

while ($resultat = $temp->fetch()){ // "Tant que le résultat est traité"
    echo '<tr>
    <td>'.$resultat['id'].'</td>
    <td>'.$resultat['nom'].'</td> 
    </tr>';
}



echo '</table>';
    ?>
</body>
</html>
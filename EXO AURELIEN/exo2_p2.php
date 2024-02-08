<?php

// script de connexion
$host = '127.0.0.1';
$db = 'bibliothèque';
$user = 'root';
$pass = '';
$port = '3306';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset;port=$port";
$pdo = new PDO($dsn, $user, $pass);

$test = 'SELECT *
        FROM editeur';
$temp = $pdo->query($test);

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
    echo '<table cellpadding="15" cellspacing="0" border="1">';
    echo '<td>Numéro éditeur</td><td>Nom éditeur</td>';

    while ($resultats = $temp->fetch()) {
        echo '<tr><td>' . $resultats['num_editeur'] . '</td><td>' . $resultats['nom_editeur'] . '</td>';
    }

    echo '</table>';
    ?>
</body>
</html>
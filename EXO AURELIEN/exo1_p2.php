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
        FROM auteur';
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
    echo '<td>Numéro auteur</td><td>Nom auteur</td><td>Prenom auteur</td>';

    while ($resultats = $temp->fetch()) {
        echo '<tr><td>' . $resultats['num_auteur'] . '</td><td>' . $resultats['nom_auteur'] . '</td><td>' . $resultats['prenom_auteur'] . '</td>';
    }

    echo '</table>';
    ?>
</body>
</html>
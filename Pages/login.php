<?php
include 'navbar.php';

$host = '127.0.0.1';
$db = 'blog';
$user = 'root';
$pass = '';
$port = 3306;
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset;port=$port";
$pdo = new PDO($dsn, $user, $pass);

$sql = 'SELECT * FROM admin;';
$temp = $pdo->query($sql);
$login = $temp->fetch();

?>






<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="connexion.php" method="post">
        <label>e-mail</label>
        <input type="text" name="mail">
        <label>Mot de passe</label>
        <input type="text" name='mdp'>
        <input type="submit">
    </form>
    <?php
    if (isset($_REQUEST['mail'])and isset($_REQUEST['mdp'])){

        if ($_REQUEST['mail']==$login[0] and $_REQUEST['mdp'] == $login[1]);
            echo 'gg';
    }
    ?>
</body>
</html>
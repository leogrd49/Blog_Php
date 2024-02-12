<?php
include 'navbar.php';
include 'connect_base.php';
?>








<?php
if (isset($_REQUEST['mail'])and isset($_REQUEST['mdp'])){

    if ($_REQUEST['mail']==$login[0] and $_REQUEST['mdp'] == $login[1]);
        echo 'gg';
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
    <link rel="stylesheet" href="design.css">
</head>
<body>

<div class="login-container">
    <form action="connexion.php" method="post" class="login-form">
        <h2>Connexion</h2>
        <div class="input-group">
            <label for="mail">E-mail</label>
            <input type="text" name="mail" id="mail">
        </div>
        <div class="input-group">
            <label for="mdp">Mot de passe</label>
            <input type="password" name="mdp" id="mdp">
        </div>
        <button type="submit" class="btn-submit">Se connecter</button>
    </form>

    <?php
    $sql = 'SELECT * FROM admin;';
    $temp = $pdo->query($sql);
    $login = $temp->fetch();
    ?>

</div>

</body>
</html>
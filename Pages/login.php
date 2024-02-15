<?php
include 'navbar.php';
include 'connect_base.php';
include 'session.php';
?>








<?php

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
    <?php
        $sql = 'SELECT * FROM utilisateur;';
        $temp = $pdo->query($sql);
        $login = $temp->fetch();
    if (isset($_REQUEST['mail'])and isset($_REQUEST['mdp'] )){

    if ($_REQUEST['mail']==$login[0] and $_REQUEST['mdp'] == $login[1]);
}
    ?>

<div class="login-container">
    <form action="<?php if ($login['perm'] == 1){ echo 'feed_admin.php'; }else{ echo 'feed.php';}?>" method="post" class="login-form">
        <h2>Connexion</h2>
        <div class="input-group">
            <label for="mail">E-mail</label>
            <input type="text" name="email" id="email">
        </div>
        <div class="input-group">
            <label for="mdp">Mot de passe</label>
            <input type="password" name="mdp" id="mdp">
        </div>
        <button type="submit" class="btn-submit">Se connecter</button>
    </form>

    

</div>
<footer>
    <div class="legal-cgs">
        <a href="legal.php">Condition générale de sécurité</a>
    </div>
</footer>

</body>
</html>
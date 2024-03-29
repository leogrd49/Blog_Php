<?php

    include 'navbar-connect.php';

include 'connect_base.php';
include 'session.php';
$loginError = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $mdp = $_POST['mdp'];
    if (isset($_REQUEST['mdp'], $_REQUEST['email'])){
        $sql = $pdo->prepare("SELECT * FROM auteur WHERE mail = ? ;");
        $sql->execute([$email]);
        $utilisateur = $sql->fetch();
        if ($utilisateur && $mdp == $utilisateur['mdp']) {
            $_SESSION['id'] = $utilisateur['id_auteur'];
            $_SESSION['log'] = 1;
            header('Location: ' . ($utilisateur['perm'] == 1 ? 'feed_admin.php' : 'feed.php'));
            exit();
        } else {
            $loginError = 'Identifiants de connexion incorrects.';
        }
    }
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
    <form action="" method="post" class="login-form">
        <h2>Connexion</h2>
        <div class="input-group">
            <label for="email">E-mail</label>
            <input type="text" name="email" id="email" required>
        </div>
        <div class="input-group">
            <label for="mdp">Mot de passe</label>
            <input type="password" name="mdp" id="mdp" required>
        </div>
        <div class="text-center">
            <h3>Vous n'avez pas de compte ?</h3>
            <a href="inscription.php">Creez en un !</a>
        </div>
        <?php echo $loginError ;?>
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